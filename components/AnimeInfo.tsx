"use client";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";
import FirstAnimeInfo from "./FirstAnimeInfo";
import SecondAnimeInfo from "./SecondAnimeInfo";
import ThirdAnimeInfo from "./ThirdAnimeInfo";
import { Skeleton } from "./ui/skeleton";

interface AnimeInfoProps {
  animeInfoId: any;
}

const AnimeInfo: FC<AnimeInfoProps> = ({ animeInfoId }) => {
  const fetchAnimeInfo = () => {
    return axios.get(`https://api.jikan.moe/v4/anime/${animeInfoId}/full`);
  };
  const fetchAnimeCharacters = () => {
    return axios.get(
      `https://api.jikan.moe/v4/anime/${animeInfoId}/characters`
    );
  };
  const fetchAnimeRecommendations = () => {
    return axios.get(
      `https://api.jikan.moe/v4/anime/${animeInfoId}/recommendations`
    );
  };

  const {
    isLoading: loadingAnimeInfoFull,
    isSuccess: successAnimeInfoFull,
    data: dataAnimeInfoFull,
  } = useQuery(`animeInfoFull`, fetchAnimeInfo, {
    onError: (err) => {
      console.log(err);
    },
  });

  const {
    isLoading: loadingAnimeCaracters,
    isSuccess: successAnimeCaracters,
    data: dataAnimeCaracters,
  } = useQuery(`animeCharacters`, fetchAnimeCharacters, {
    onError: (err) => {
      console.log(err);
    },
  });

  const {
    isLoading: loadingAnimeRecommendations,
    isSuccess: successAnimeRecommendations,
    data: dataAnimeRecommendations,
  } = useQuery(`animeRecommendations`, fetchAnimeRecommendations, {
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      <div className="max-w-[1200px] min-h-screen mx-auto pb-10">
        {/* --------- Loader --------- */}
        {loadingAnimeInfoFull && (
          <div className="flex flex-col md:flex-row p-3 md:p-5 gap-5 min-h-screen mb-20">
            <div className="in-w-full h-[105px] md:h-0 md:min-w-[240px] relative ">
              <Skeleton className="bg-[#25A18E] w-[150px] h-[200px] md:h-[300px] md:min-w-[220px]  drop-shadow-md rounded-lg absolute top-[-100px] left-[50%] translate-x-[-50%]" />
            </div>
            <div className="flex-1">
              <Skeleton className="w-full h-7 bg-[#25A18E] mb-2 md:mb-4" />

              <div>
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
                <Skeleton className="w-full h-3 bg-[#25A18E] mb-2" />
              </div>
            </div>
          </div>
        )}

        {/* --------- Anime Info First --------- */}
        {!loadingAnimeInfoFull && (
          <FirstAnimeInfo
            loading={loadingAnimeInfoFull}
            data={dataAnimeInfoFull?.data.data}
          />
        )}

        {/* --------- Anime Info Second --------- */}
        {!loadingAnimeInfoFull && (
          <SecondAnimeInfo
            loadingAnime={loadingAnimeInfoFull}
            loadingCharacters={loadingAnimeCaracters}
            dataAnime={dataAnimeInfoFull?.data.data}
            dataCharacters={dataAnimeCaracters?.data.data}
          />
        )}

        {/* --------- Anime Info Third Recommendations --------- */}

        <ThirdAnimeInfo
          loading={loadingAnimeRecommendations}
          success={successAnimeRecommendations}
          data={dataAnimeRecommendations?.data.data}
        />
      </div>
    </>
  );
};

export default AnimeInfo;
