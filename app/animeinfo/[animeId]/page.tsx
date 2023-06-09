"use client";
import axios from "axios";
import { FC, useState } from "react";
import { useQuery } from "react-query";

interface AnimeInfoPageProps {
  params: {
    animeId: any;
  };
}

const AnimeInfoPage: FC<AnimeInfoPageProps> = ({ params }) => {
  const [animeInfo, setAnimeInfo] = useState({});

  const fetchAnimeInfo = () => {
    return axios.get(`https://api.jikan.moe/v4/anime/${params.animeId}/full`);
  };

  const { isLoading: loadingAnimeInfoFull, data: dataAnimeInfoFull } = useQuery(
    `animeInfoFull`,
    fetchAnimeInfo,
    {
      onError: (err) => {
        console.log(err);
      },
      onSuccess: (res) => {
        setAnimeInfo(res.data.data);
      },
    }
  );

  return <main>Hello</main>;
};

export default AnimeInfoPage;
