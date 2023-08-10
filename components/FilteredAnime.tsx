"use client";
import { FC } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import AnimeCard from "./AnimeCard";
import { ImSpinner9 } from "react-icons/im";

interface FilteredAnimeProps {
  genres: any;
  setGenres: any;
  genresData: any;
  orderBy: any;
  setOrderBy: any;
  rating: any;
  setRating: any;
  status: any;
  setStatus: any;
}

const FilteredAnime: FC<FilteredAnimeProps> = ({
  genres,
  setGenres,
  genresData,
  orderBy,
  setOrderBy,
  rating,
  setRating,
  status,
  setStatus,
}) => {
  const fetchAnimeFiltered: any = ({ pageParam = 1 }) => {
    console.log(
      `https://api.jikan.moe/v4/anime?page=${pageParam}${
        orderBy != "all" && `&order_by=${orderBy}`
      }${status != "all" && `&status=${status}`}${
        rating != "all" && `&rating=${rating}`
      }${
        genres.length > 0
          ? `&genres=${genres.map((data: any, i: number) => {
              return data.mal_id;
            })}`
          : ``
      }`
    );

    return axios.get(
      `https://api.jikan.moe/v4/anime?page=${pageParam}${
        orderBy !== "all" ? `&order_by=${orderBy}` : ""
      }${status !== "all" ? `&status=${status}` : ``}${
        rating !== "all" ? `&rating=${rating}` : ``
      }${
        genres.length > 0
          ? `&genres=${genres.map((data: any, i: number) => {
              return data.mal_id;
            })}`
          : ``
      }`
    );
  };

  //   ---------- Query for Filtered Anime
  const {
    isLoading: loadingAnimeFiltered,
    isFetching: fetchingAnimeFiltered,
    isSuccess: successAnimeFiltered,
    data: animeData,
    fetchNextPage: fecthNextAnime,
    refetch: refetchAnime,
  } = useInfiniteQuery(`animeFiltered`, fetchAnimeFiltered, {
    getNextPageParam: (lastPage: any, pages: any) => {
      const nextPage = pages[pages.length - 1];
      if (nextPage.data.length === 0) {
        return undefined;
      } else {
        return pages.length + 1;
      }
    },

    onError: (e) => {
      console.log(`Oops! something went wrong`);
      console.log(e);
    },
    onSuccess: (res) => {
      console.log(`Data fetched successfully`);
    },
  });

  return (
    <>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 sm:gap-4 px-16 sm:px-0 pt-4 sm:pt-0">
        {animeData?.pages.map((page: any, i: number) => {
          return page?.data?.data.map((data: any, j: number) => {
            return (
              <AnimeCard
                data={data}
                titleCount={45}
                isCollection={false}
                key={j}
              />
            );
          });
        })}
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        {fetchingAnimeFiltered && (
          <div className="flex items-center justify-center w-full pt-10">
            <p className="flex animate-spin text-[#25A18E]">
              <ImSpinner9 className="flex" size={50} />
            </p>
          </div>
        )}

        {animeData?.pages[0].data.data.length == 0 &&
          !fetchingAnimeFiltered && (
            <div className="flex items-center justify-center w-full pt-8">
              <p className="flex text-white">No Anime Found</p>
            </div>
          )}

        {!fetchingAnimeFiltered &&
          animeData?.pages[0].data.data.length > 0 &&
          animeData?.pages[0].data.pagination.current_page <
            animeData?.pages[0].data.pagination.items.total && (
            <button
              onClick={() => {
                fecthNextAnime();
              }}
              className="text-white text-sm bg-[#212529] hover:bg-[#343A40] py-1 px-2 rounded cursor-pointer">
              Load More
            </button>
          )}
      </div>
    </>
  );
};

export default FilteredAnime;
