import Image from "next/image";
import { FC } from "react";
import { FaMedal, FaStar, FaHeart } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface FirstAnimeInfoProps {
  loadingAnime: boolean;
  loadingCharacters: boolean;
  success: boolean;
  dataAnime: any;
  dataCharacters: any;
}

const SecondAnimeInfo: FC<FirstAnimeInfoProps> = ({
  loadingCharacters,
  success,
  dataAnime,
  dataCharacters,
}) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap p-3 md:p-5 gap-5">
      <div className="min-w-full max-w-full  sm:min-w-[240px] sm:max-w-[240px] relative flex flex-col gap-2 ">
        {dataAnime.rank != null && (
          <div className="text-white font-semibold flex py-1.5 px-3 justify-between items-center bg-[#1C2024] rounded-md">
            <p className="flex items-center gap-2">
              <FaMedal size={18} className="text-[#ffb703]" /> Ranked
            </p>
            <p>#{dataAnime.rank}</p>
          </div>
        )}
        {dataAnime.score != null && (
          <div className="text-white font-semibold flex py-1.5 px-3 justify-between items-center bg-[#1C2024] rounded-md">
            <p className="flex items-center gap-2">
              <FaStar size={18} className="text-[#25A18E]" /> Scored
            </p>
            <p>{dataAnime.score}</p>
          </div>
        )}
        {dataAnime.popularity != null && (
          <div className=" text-white font-semibold flex py-1.5 px-3 justify-between items-center bg-[#1C2024] rounded-md">
            <p className="flex items-center gap-2">
              <FaHeart size={18} className="text-[#d90429]" /> Popularity
            </p>
            <p>#{dataAnime.popularity}</p>
          </div>
        )}

        <div className="p-3 flex flex-col bg-[#1C2024] rounded-md gap-4">
          {/* Genre */}
          <div>
            <p className="text-white font-semibold mb-1">Genre</p>
            <div className="flex flex-wrap gap-1">
              {dataAnime.genres.map((data: any) => {
                return (
                  <p
                    key={data.mal_id}
                    className="text-white text-xs bg-[#343A40] py-0.5 px-1.5 rounded">
                    {data.name}
                  </p>
                );
              })}
              {dataAnime.themes.map((data: any) => {
                return (
                  <p
                    key={data.mal_id}
                    className="text-white text-xs bg-[#343A40] py-0.5 px-1.5 rounded">
                    {data.name}
                  </p>
                );
              })}
              {dataAnime.demographics.map((data: any) => {
                return (
                  <p
                    key={data.mal_id}
                    className="text-white text-xs bg-[#343A40] py-0.5 px-1.5 rounded">
                    {data.name}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Rating */}
          {dataAnime.rating != null && (
            <div>
              <p className="text-white font-semibold mb-1">Rating</p>
              <div className="flex flex-wrap gap-1">
                <p className="text-[#CED4DA] text-sm ">{dataAnime.rating}</p>
              </div>
            </div>
          )}

          {/* Year Released */}
          <div>
            <p className="text-white font-semibold mb-1">Release</p>
            <div className="flex flex-wrap gap-1">
              <p className="text-[#CED4DA] text-sm ">
                {dataAnime.season != null &&
                  dataAnime.season.charAt(0).toUpperCase() +
                    dataAnime.season.slice(1)}{" "}
                {dataAnime.year != null
                  ? dataAnime.year
                  : dataAnime.aired.prop.from.year}
              </p>
            </div>
          </div>

          {/* Episodes */}
          {dataAnime.episodes != null && (
            <div>
              <p className="text-white font-semibold mb-1">Episodes</p>
              <div className="flex flex-wrap gap-1">
                <p className="text-[#CED4DA] text-sm ">{dataAnime.episodes}</p>
              </div>
            </div>
          )}

          {/* Episodes Duration */}
          {dataAnime.duration != null && (
            <div>
              <p className="text-white font-semibold mb-1">Duration</p>
              <div className="flex flex-wrap gap-1">
                <p className="text-[#CED4DA] text-sm ">{dataAnime.duration}</p>
              </div>
            </div>
          )}

          {/* Broadcast */}
          {dataAnime.broadcast != null && dataAnime.airing && (
            <div>
              <p className="text-white font-semibold mb-1">Broadcast</p>
              <div className="flex flex-wrap gap-1">
                <p className="text-[#CED4DA] text-sm ">
                  {dataAnime.broadcast.string}
                </p>
              </div>
            </div>
          )}

          {/* Type */}
          {dataAnime.type != null && (
            <div>
              <p className="text-white font-semibold mb-1">Type</p>
              <div className="flex flex-wrap gap-1">
                <p className="text-[#CED4DA] text-sm ">{dataAnime.type}</p>
              </div>
            </div>
          )}

          {/* Source */}
          {dataAnime.source != null && (
            <div>
              <p className="text-white font-semibold mb-1">Source</p>
              <div className="flex flex-wrap gap-1">
                <p className="text-[#CED4DA] text-sm ">{dataAnime.source}</p>
              </div>
            </div>
          )}

          {/* Studios */}
          {dataAnime.studios != null && (
            <div>
              <p className="text-white font-semibold mb-1">Studio</p>
              <div className="flex flex-wrap gap-1">
                {dataAnime.studios.map((data: any) => {
                  return (
                    <p className="text-[#CED4DA] text-sm " key={data.mal_id}>
                      {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {/* Producers */}
          {dataAnime.producers != null && (
            <div>
              <p className="text-white font-semibold mb-1">Producers</p>
              <div className="flex flex-col flex-wrap gap-1">
                {dataAnime.producers.map((data: any) => {
                  return (
                    <p className="text-[#CED4DA] text-sm " key={data.mal_id}>
                      {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Characters & More */}
      <div className="w-full min-h-screen flex flex-col">
        <h1 className="text-white font-semibold text-xl md:text-2xl mb-3">
          Characters
        </h1>

        {success && (
          <ScrollArea className="rounded-md max-h-[540px] md:max-h-[600px] flex-1 mb-10">
            {/* Charactars Card Container */}
            {!loadingCharacters && (
              <div className="p-0 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
                {dataCharacters.map((data: any) => {
                  return (
                    <Link href={`/character/${data.character.mal_id}`}>
                      <div
                        className="bg-[#1C2024] md:hover:bg-[#212529] overflow-hidden rounded-md flex flex-col h-full cursor-pointer"
                        key={data.character.mal_id}>
                        <div className="relative flex">
                          <Image
                            src={data.character.images.jpg.image_url}
                            alt="Anime Character IMG"
                            width={115}
                            height={230}
                            className="h-[180px] w-full object-cover object-center"
                            draggable={false}
                          />
                        </div>

                        <div className="p-2">
                          <h3 className="text-white font-medium text-sm">
                            {data.character.name}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </ScrollArea>
        )}

        {dataAnime.trailer.embed_url != null && (
          <>
            <h1 className="text-white font-semibold text-xl md:text-2xl mb-3 ">
              Trailer
            </h1>

            <div className="aspect-video overflow-hidden rounded-lg mb-10 lg:mx-14 lg:mt-4">
              <iframe
                width={"100%"}
                height={"100%"}
                src={dataAnime.trailer.embed_url}></iframe>
            </div>
          </>
        )}

        {dataAnime.streaming != null && dataAnime.streaming.length > 0 && (
          <>
            <h1 className="text-white font-semibold text-xl md:text-2xl mb-3 ">
              Streaming
            </h1>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {dataAnime.streaming.map((data: any, i: number) => {
                return (
                  data.url != null && (
                    <a
                      href={data.url}
                      target="_blank"
                      className="text-sm md:text-base text-[#fff] bg-[#25A18E] hover:bg-[#26c7af] font-semibold py-1 px-3 rounded-3xl"
                      key={i}>
                      {data.name}
                    </a>
                  )
                );
              })}
            </div>
          </>
        )}

        {dataAnime.external != null && dataAnime.external.length > 0 && (
          <>
            <h1 className="text-white font-semibold text-xl md:text-2xl mb-3 ">
              Other Site
            </h1>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {dataAnime.external.map((data: any, i: number) => {
                return (
                  data.url != null && (
                    <a
                      href={data.url}
                      target="_blank"
                      className="text-sm md:text-base text-[#fff] bg-[#25A18E] hover:bg-[#26c7af] font-semibold py-0.5 md:py-1 px-3 rounded-3xl"
                      key={i}>
                      {data.name}
                    </a>
                  )
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondAnimeInfo;
