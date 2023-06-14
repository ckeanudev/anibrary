"use client";
import * as React from "react";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import AnimeCard from "./AnimeCard";
import { TbLoader3 } from "react-icons/tb";
import Footer from "./Footer";
import { useState } from "react";
import { ComboboxDemo } from "./CollectionComboboxDemo";
import FilteringCommand from "./FilteringCommand";

const CollectionMain = () => {
  const [genres, setGenres] = React.useState([]);
  const [orderBy, setOrderBy] = React.useState("rank");
  const [rating, setRating] = React.useState("g");

  const fetchGenres = () => {
    return axios.get(`https://api.jikan.moe/v4/genres/anime`);
  };

  const fetchAnimeFiltered: any = ({ pageParam = 1 }) => {
    return axios.get(
      `https://api.jikan.moe/v4/anime?order_by=${orderBy}&rating=${rating}&page=${pageParam}`
    );
  };

  const {
    isLoading: loadingGenres,
    isFetching: fetchingGenres,
    isSuccess: successGenres,
    data: genreData,
  } = useQuery(`genres`, fetchGenres, {
    onError: (e) => {
      console.log(e);
    },
  });

  const {
    isLoading: loadingAnimeFiltered,
    isFetching: fetchingAnimeFiltered,
    isSuccess: successAnimeFiltered,
    data: animeData,
    fetchNextPage: fecthNextAnime,
    refetch: refetchAnime,
  } = useInfiniteQuery(`animeFiltered`, fetchAnimeFiltered, {
    onError: (e) => {
      console.log(e);
    },
  });

  return (
    <div className="relative">
      <div className="flex flex-col w-full min-h-[2000px] pt-16 px-2 pb-10">
        <div className="flex gap-2 items-center mb-3">
          <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full "></div>
          <h1 className="text-2xl font-semibold text-white">Collection</h1>
        </div>

        {successGenres && (
          <div className="flex flex-1">
            {/* --------------- Filtering Command --------------- */}
            <div className=" min-w-[360px] max-w-[360px] ">
              <FilteringCommand
                genres={genres}
                setGenres={setGenres}
                genresData={genreData}
              />
            </div>

            {/* --------------- Anime --------------- */}
            {successGenres && successAnimeFiltered && (
              //   <div className="flex-1 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div className="flex-1 px-3 flex flex-wrap justify-center gap-4">
                {animeData.pages.map((page: any, i: number) => {
                  return page?.data?.data.map((data: any, j: number) => {
                    return (
                      <AnimeCard
                        data={data}
                        titleCount={45}
                        infoCount={490}
                        isCollection={true}
                        key={j}
                      />
                    );
                  });
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CollectionMain;
