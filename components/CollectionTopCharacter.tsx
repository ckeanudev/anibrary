"use client";
import axios from "axios";
import Image from "next/image";
import { useInfiniteQuery } from "react-query";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { TbLoader3 } from "react-icons/tb";
import Footer from "./Footer";

const fetchTopCharacter: any = ({ pageParam = 1 }) => {
  return axios.get(`https://api.jikan.moe/v4/top/characters?page=${pageParam}`);
};

const CollectionTopCharacter = () => {
  const {
    isLoading,
    isFetching,
    data: dataAnime,
    hasNextPage,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery(`topCharacter`, fetchTopCharacter, {
    getNextPageParam: (lastPage: any, pages: any) => {
      const nextPage = pages[pages.length - 1];
      if (nextPage.data.length === 0) {
        return undefined;
      } else {
        return pages.length + 1;
      }
    },
    onError: (err) => {
      console.log(`Oops! something went wrong`);
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(`Data fetched successfully`);
    },
  });

  return (
    <>
      <div className="max-w-[1300px] min-h-screen mx-auto pt-16 px-4 pb-10">
        <div className="flex gap-2 items-center mb-3">
          <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full "></div>
          <h1 className="text-2xl font-semibold">Top Characters</h1>
        </div>

        {isSuccess && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 pt-4 sm:pt-0 px-2 sm:px-0">
            {dataAnime?.pages?.map((page: any, i: number) => {
              return page?.data?.data.map((data: any, i: number) => {
                return (
                  <Link href={`/character/${data.mal_id}`} key={i}>
                    <div className="flex flex-col bg-[#1C2024] hover:bg-[#212529] rounded-lg overflow-hidden h-full cursor-pointer">
                      <div className="flex relative">
                        <Image
                          src={data.images.jpg.image_url}
                          alt="Top character image"
                          width={160}
                          height={280}
                          priority
                          className="w-full"
                        />

                        {data.favorites != null && (
                          <p className="flex items-center gap-1 absolute bottom-1 left-1 bg-[#212529] py-0.5 px-2 rounded-xl text-xs">
                            <FaHeart className="text-[#d00000]" size={12} />{" "}
                            {data.favorites.toLocaleString("en-US")}
                          </p>
                        )}
                      </div>
                      <div className="p-2">
                        <h3 className="text-white font-semibold text-base">
                          {data.name != null && data.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
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
      <Footer />
    </>
  );
};

export default CollectionTopCharacter;
