"use client";
import { useQuery } from "react-query";
import axios from "axios";
import MainAnime from "./MainAnime";

const fetchSeasonNow = () => {
  return axios.get(`https://api.jikan.moe/v4/seasons/now`);
};
const fetchTopAnime = () => {
  return axios.get(`https://api.jikan.moe/v4/top/anime`);
};
const fetchTopUpcoming = () => {
  return axios.get(`https://api.jikan.moe/v4/seasons/upcoming`);
};

const MainHolder = () => {
  const { isLoading: loadingSeasonNow, data: dataSeasonNow } = useQuery(
    `seasonNow`,
    fetchSeasonNow,
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );
  const { isLoading: loadingTopAnime, data: dataTopAnime } = useQuery(
    `topAnime`,
    fetchTopAnime,
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );
  const { isLoading: loadingTopUpcoming, data: dataTopUpcoming } = useQuery(
    `topUpcoming`,
    fetchTopUpcoming,
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return (
    <section className="min-h-screen bg-[#161A1D] pb-5">
      {/* ----- Season Now / Currently Airing ----- */}
      <MainAnime
        title={"New Season"}
        loading={loadingSeasonNow}
        data={dataSeasonNow}
        link={"/newseason"}
      />

      {/* ----- Top Anime ----- */}
      <MainAnime
        title={"Top Anime"}
        loading={loadingTopAnime}
        data={dataTopAnime}
        link={"/topanime"}
      />

      {/* ----- Top Upcoming ----- */}
      <MainAnime
        title={"Top Upcoming"}
        loading={loadingTopUpcoming}
        data={dataTopUpcoming}
        link={"/topupcoming"}
      />
    </section>
  );
};

export default MainHolder;
