import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaMedal, FaStar, FaHeart } from "react-icons/fa";

interface FirstCharacterInfoProps {
  loading: boolean;
  data: any;
}

const FirstCharacterInfo: FC<FirstCharacterInfoProps> = ({ loading, data }) => {
  return (
    <div className="flex flex-col md:flex-row p-3 md:p-5 gap-2 md:gap-5 min-h-[250px]">
      <div className="min-w-full md:min-w-[240px] md:max-w-[240px] relative">
        <div className="flex flex-col relative md:bottom-16">
          <Image
            src={data.images.jpg.image_url}
            alt="Character Image"
            width={200}
            height={320}
            priority
            className="rounded-lg mx-auto w-[150px] md:min-w-[180px] drop-shadow-md mb-4"
          />

          {/* Character's Name for Mobile */}
          <div className=" gap-1 items-center mb-4 flex md:hidden flex-wrap">
            <h1 className="text-white text-xl font-semibold ">
              {data.name != null && data.name}{" "}
              {/* {data.name_kanji != null && `(${data.name_kanji})`} */}
            </h1>
            <p className="text-white text-sm">
              {data.name_kanji != null && `(${data.name_kanji})`}
            </p>
          </div>

          {/* Favorites Votes*/}
          <div className="flex items-center justify-between bg-[#1C2024] py-1.5 px-3 rounded-md  font-semibold mb-3">
            <p className="text-white text-base flex items-center gap-2 ">
              <FaHeart size={18} className="text-[#d90429]" /> Favorites
            </p>
            <p className="text-white text-base">
              {data.favorites.toLocaleString("en-US")}
            </p>
          </div>

          {/* Character's Nicknames */}
          {data.nicknames.length > 0 && data.nicknames != null && (
            <div className="flex flex-col bg-[#1C2024] py-2 px-3 rounded-md  mb-3">
              <p className="text-white font-semibold mb-1 ">Nicknames</p>

              <div className="flex flex-wrap gap-1">
                {data.nicknames.map((data: any, i: number) => {
                  return (
                    <p
                      className="text-white text-xs bg-[#343A40] py-0.5 px-1.5 rounded"
                      key={i}>
                      {data}
                    </p>
                  );
                })}
              </div>
            </div>
          )}

          {/* Animeography for Desktop */}
          {data.anime.length > 0 && (
            <div className="hidden md:flex flex-col mt-1 pt-2 border-t-[1px] border-[#343A40]">
              <p className="text-white font-semibold mb-2">Animeography</p>

              <div className="flex flex-col gap-2">
                {data.anime.map((data: any, i: number) => {
                  return (
                    <Link href={`/animeinfo/${data.anime.mal_id}`} key={i}>
                      <div className="flex rounded overflow-hidden cursor-pointer bg-[#1C2024] hover:bg-[#212529]">
                        <Image
                          src={data.anime.images.jpg.image_url}
                          width={60}
                          height={100}
                          alt="anime Img"
                          className="w-auto h-auto"
                        />
                        <div className="flex-1 p-2">
                          <p className="text-white text-xs">
                            {data.anime.title != null && data.anime.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1">
        <div className=" gap-1 items-center mb-1 md:mb-3 hidden md:flex flex-wrap">
          <h1 className="text-white text-xl md:text-3xl font-semibold ">
            {data.name != null && data.name}{" "}
          </h1>
          <p className="text-white text-xl">
            {data.name_kanji != null && `(${data.name_kanji})`}
          </p>
        </div>

        <p
          className="text-[#DEE2E6] text-xs md:text-sm"
          style={{ whiteSpace: "pre-line" }}>
          {data.about != null && data.about}
        </p>

        {/* Character's Voice Actors */}
        <div className="pt-10 mb-5 text-white">
          <h2 className="text-white text-lg md:text-xl font-semibold mb-3">
            Voice Actors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.voices.length > 0 &&
              data.voices.map((data: any, i: number) => {
                return (
                  <div
                    className="flex bg-[#1C2024] rounded overflow-hidden"
                    key={i}>
                    {data.person.images.jpg.image_url != null && (
                      <Image
                        src={data.person.images.jpg.image_url}
                        width={80}
                        height={40}
                        alt="Voices Image"
                        className="min-w-[80px] min-h-[40px] object-cover object-center"
                      />
                    )}
                    <div className="flex-1 py-2 px-3">
                      {data.person.name != null && (
                        <h3 className="font-semibold">
                          {data.person.name || `N/A`}
                        </h3>
                      )}
                      {data.language != null && (
                        <p className="text-[#ADB5BD] text-sm">
                          {data.language || `N/A`}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Animeography for Mobile */}
        {data.anime.length > 0 && (
          <div className="flex md:hidden flex-col mt-1 pt-2 border-t-[1px] border-[#343A40]">
            <p className="text-white font-semibold mb-2">Animeography</p>

            <div className="grid grid-cols-3 gap-3">
              {data.anime.map((data: any, i: number) => {
                return (
                  <Link href={`/animeinfo/${data.anime.mal_id}`} key={i}>
                    <div className="flex flex-col rounded overflow-hidden cursor-pointer bg-[#1C2024] h-full">
                      <Image
                        src={data.anime.images.jpg.image_url}
                        width={120}
                        height={180}
                        alt="anime Img"
                        className="w-full h-[180px] object-cover object-center"
                      />
                      <div className="flex-1 p-2">
                        <p className="text-white text-xs">
                          {data.anime.title != null && data.anime.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstCharacterInfo;
