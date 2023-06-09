"use client";
import axios from "axios";
import Image from "next/image";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import FirstAnimeInfo from "./FirstAnimeInfo";
import SecondAnimeInfo from "./SecondAnimeInfo";
import ThirdAnimeInfo from "./ThirdAnimeInfo";
import MainAnime from "./MainAnime";

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

  const { isLoading: loadingAnimeInfoFull, data: dataAnimeInfoFull } = useQuery(
    `animeInfoFull`,
    fetchAnimeInfo,
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const { isLoading: loadingAnimeCaracters, data: dataAnimeCaracters } =
    useQuery(`animeCharacters`, fetchAnimeCharacters, {
      onError: (err) => {
        console.log(err);
      },
    });

  const {
    isLoading: loadingAnimeRecommendations,
    data: dataAnimeRecommendations,
  } = useQuery(`animeRecommendations`, fetchAnimeRecommendations, {
    onError: (err) => {
      console.log(err);
    },
    // onSuccess: (res) => {
    //   console.log(res.data.data);
    // },
  });

  return (
    <>
      <div className="max-w-[1200px] min-h-screen mx-auto pb-10">
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

        {/* --------- Anime Info Third --------- */}

        <ThirdAnimeInfo
          loading={loadingAnimeRecommendations}
          data={dataAnimeRecommendations?.data.data}
        />
      </div>

      {/* --------- Anime Recommendations --------- */}

      {/* <MainAnime
        title={"Recommendations"}
        loading={loadingAnimeRecommendations}
        data={dataAnimeRecommendations}
      /> */}
    </>
  );
};

export default AnimeInfo;
