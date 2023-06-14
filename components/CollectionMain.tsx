"use client";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import AnimeCard from "./AnimeCard";
import { TbLoader3 } from "react-icons/tb";
import Footer from "./Footer";
import { useState } from "react";
import { ComboboxDemo } from "./CollectionComboboxDemo";
import FilteringCommand from "./FilteringCommand";

const CollectionMain = () => {
  const [filter, setFilter] = useState([]);

  return (
    <div className="relative">
      <div className="flex flex-col w-full min-h-[2000px] pt-16 px-2 pb-10">
        <div className="flex gap-2 items-center mb-3">
          <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full "></div>
          <h1 className="text-2xl font-semibold text-white">Collection</h1>
        </div>

        <div className="flex flex-1 ">
          {/* --------------- Filtering Command --------------- */}
          <div className=" min-w-[300px] max-w-[300px] ">
            <FilteringCommand />
          </div>

          {/* --------------- Anime --------------- */}
          <div className="grid grid-cols-5"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollectionMain;
