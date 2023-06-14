"use client";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import AnimeCard from "./AnimeCard";
import { TbLoader3 } from "react-icons/tb";
import Footer from "./Footer";
import { useState } from "react";
import { ComboboxDemo } from "./CollectionFilter";

const CollectionMain = () => {
  const [filter, setFilter] = useState([]);

  return (
    <>
      <div className="max-w-[1300px] min-h-screen mx-auto pt-16 px-4 pb-10">
        <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full "></div>
            <h1 className="text-2xl font-semibold text-white">Collection</h1>
          </div>

          <div>
            <ComboboxDemo filter={setFilter} />
          </div>
        </div>

        <div className="w-full flex gap-2">
          {filter.map((data: any, i: number) => {
            return (
              <p
                className="text-white text-xs bg-[#495057] py-1 px-2 rounded"
                key={i}>
                {data}
              </p>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollectionMain;
