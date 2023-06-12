"use client";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import AnimeCard from "./AnimeCard";
import { TbLoader3 } from "react-icons/tb";

const fetchUpcomingSeason: any = ({ pageParam = 1 }) => {
  return axios.get(
    `https://api.jikan.moe/v4/seasons/upcoming?page=${pageParam}`
  );
};

const CollectionUpcomingSeason = () => {
  const {
    isFetching,
    data: dataAnime,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery(`upcomingSeason`, fetchUpcomingSeason, {
    getNextPageParam: (lastPage: any, pages: any) => {
      const nextPage = pages[pages.length - 1];
      if (nextPage.data.length === 0) {
        return undefined;
      } else {
        return pages.length + 1;
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="max-w-[1300px] min-h-screen mx-auto pt-16 px-4 pb-10">
      <div className="flex gap-2 items-center mb-3">
        <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full "></div>
        <h1 className="text-2xl font-semibold">Upcoming Season</h1>
      </div>

      {isSuccess && (
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 sm:gap-4 px-16 sm:px-0 pt-4 sm:pt-0">
          {dataAnime?.pages?.map((page: any, i: number) => {
            return page?.data?.data.map((data: any, i: number) => {
              return (
                <AnimeCard
                  data={data}
                  titleCount={45}
                  infoCount={490}
                  key={i}
                />
              );
            });
          })}
        </div>
      )}

      <div className="w-full flex items-center justify-center mt-10">
        {isFetching && (
          <div className="flex items-center justify-center w-full pt-8">
            <p className="flex animate-spin text-[#25A18E]">
              <TbLoader3 className="flex" size={60} />
            </p>
          </div>
        )}

        {!isFetching && (
          <button
            onClick={() => {
              fetchNextPage();
            }}
            className="text-sm bg-[#212529] hover:bg-[#343A40] py-1 px-2 rounded cursor-pointer">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default CollectionUpcomingSeason;
