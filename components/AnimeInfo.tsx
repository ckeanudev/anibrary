"use client";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";
import FirstAnimeInfo from "./FirstAnimeInfo";
import SecondAnimeInfo from "./SecondAnimeInfo";
import ThirdAnimeInfo from "./ThirdAnimeInfo";
import { TbLoader3 } from "react-icons/tb";
import Footer from "./Footer";

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
      console.log(`Oops! something went wrong`);
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(`Data fetched successfully`);
    },
  });

  const {
    isLoading: loadingAnimeCaracters,
    isSuccess: successAnimeCaracters,
    data: dataAnimeCaracters,
  } = useQuery(`animeCharacters`, fetchAnimeCharacters, {
    onError: (err) => {
      console.log(`Oops! something went wrong`);
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(`Data fetched successfully`);
    },
  });

  const {
    isLoading: loadingAnimeRecommendations,
    isSuccess: successAnimeRecommendations,
    data: dataAnimeRecommendations,
  } = useQuery(`animeRecommendations`, fetchAnimeRecommendations, {
    onError: (err) => {
      console.log(`Oops! something went wrong`);
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(`Data fetched successfully`);
    },
  });

  return (
    <>
      <div className="max-w-[1200px] min-h-screen mx-auto pb-10">
        {/* --------- Loader --------- */}

        {loadingAnimeInfoFull && (
          <div className="flex items-center justify-center w-full pt-16">
            <p className="flex animate-spin text-[#25A18E]">
              <TbLoader3 className="flex" size={60} />
            </p>
          </div>
        )}

        {/* --------- Anime Info First --------- */}
        {successAnimeInfoFull && (
          <FirstAnimeInfo
            loading={loadingAnimeInfoFull}
            success={successAnimeInfoFull}
            data={dataAnimeInfoFull?.data.data}
          />
        )}

        {/* --------- Anime Info Second --------- */}
        {successAnimeInfoFull && (
          <SecondAnimeInfo
            loadingAnime={loadingAnimeInfoFull}
            loadingCharacters={loadingAnimeCaracters}
            success={successAnimeCaracters}
            dataAnime={dataAnimeInfoFull?.data.data}
            dataCharacters={dataAnimeCaracters?.data.data}
          />
        )}

        {/* --------- Anime Info Third Recommendations --------- */}
        {successAnimeRecommendations && (
          <ThirdAnimeInfo
            loading={loadingAnimeRecommendations}
            success={successAnimeRecommendations}
            data={dataAnimeRecommendations?.data.data}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default AnimeInfo;
