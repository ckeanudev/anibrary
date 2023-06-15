"use client";
import * as React from "react";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import AnimeCard from "./AnimeCard";
import { CgOptions } from "react-icons/cg";
import Footer from "./Footer";
import FilteringCommand from "./FilteringCommand";
import FilteredAnime from "./FilteredAnime";
import { TbLoader3 } from "react-icons/tb";

const CollectionMain = () => {
  const [showFilter, setShowFilter] = React.useState(true);

  const [genres, setGenres] = React.useState([]);
  const [orderBy, setOrderBy] = React.useState("all");
  const [rating, setRating] = React.useState("all");
  const [status, setStatus] = React.useState("all");

  const fetchGenres = () => {
    return axios.get(`https://api.jikan.moe/v4/genres/anime`);
  };

  //   ---------- Query for Genres
  const {
    isLoading: loadingGenres,
    isFetching: fetchingGenres,
    isSuccess: successGenres,
    data: genreData,
  } = useQuery(`genres`, fetchGenres, {
    onError: (err) => {
      console.log(`Oops! something went wrong`);
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(`Data fetched successfully`);
    },
  });

  return (
    <div className="relative">
      <div className="max-w-[1300px] mx-auto min-h-screen pt-16 px-4 pb-10">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex gap-2 items-center ">
            <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full "></div>
            <h1 className="text-2xl font-semibold text-white">Collection</h1>
          </div>

          <p
            onClick={() => {
              setShowFilter((prev) => !prev);
            }}
            className={`flex text-white ${
              showFilter ? `bg-[#495057]` : `bg-[#212529]`
            } p-1.5 rounded-full items-center justify-center cursor-pointer hover:bg-[#343A40]`}>
            <CgOptions size={24} />
          </p>
        </div>

        {fetchingGenres && (
          <div className="flex items-center justify-center w-full pt-8">
            <p className="flex animate-spin text-[#25A18E]">
              <TbLoader3 className="flex" size={60} />
            </p>
          </div>
        )}

        {successGenres && (
          <div className="flex flex-1">
            {/* --------------- Filtering Command --------------- */}
            {showFilter && (
              <div className="w-full">
                <FilteringCommand
                  genres={genres}
                  setGenres={setGenres}
                  genresData={genreData}
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                  rating={rating}
                  setRating={setRating}
                  status={status}
                  setStatus={setStatus}
                />
              </div>
            )}

            {/* --------------- Anime --------------- */}
            {!showFilter && (
              <div className="w-full">
                <FilteredAnime
                  genres={genres}
                  setGenres={setGenres}
                  genresData={genreData}
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                  rating={rating}
                  setRating={setRating}
                  status={status}
                  setStatus={setStatus}
                />
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
