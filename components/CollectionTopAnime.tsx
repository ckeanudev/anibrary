"use client";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import AnimeCard from "./AnimeCard";

const CollectionTopAnime = () => {
  return (
    <div className="max-w-[1300px] min-h-screen mx-auto pt-16 px-4 pb-10">
      <div className="flex gap-2 items-center mb-3">
        <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full "></div>
        <h1 className="text-2xl font-semibold">Top Anime</h1>
      </div>
    </div>
  );
};

export default CollectionTopAnime;
