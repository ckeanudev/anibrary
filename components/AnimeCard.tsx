import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCrown } from "react-icons/fa";

type AnimeCardProps = {
  data: any;
  titleCount: number;
  infoCount: number;
};

const AnimeCard: React.FunctionComponent<AnimeCardProps> = ({
  data,
  titleCount,
  infoCount,
}) => {
  const [hoverInfo, setHoverInfo] = useState(false);

  const truncateString = (string: string, count: number, i: number) => {
    try {
      return `${string.slice(0, count)}${string.length > count ? `...` : ``}`;
    } catch (error) {
      console.log(i);
      console.log(error);
    }
  };

  return (
    <div
      className="relative bg-[#1C2024] min-w-[200px] flex flex-col overflow-hidden rounded-md"
      onMouseEnter={() => {
        setHoverInfo(true);
      }}
      onMouseLeave={() => {
        setHoverInfo(false);
      }}>
      {/* ------- Anime Image ------- */}
      <div className="flex relative ">
        <Image
          src={data.images.jpg.large_image_url}
          alt="animePic"
          width={221}
          height={313}
          className="w-full h-[340px] overflow-hidden object-cover object-center"
          draggable={false}
          priority
        />

        {/* ------- Anime Currently Airing ------- */}
        {data.airing && (
          <div className="flex gap-1 items-center absolute top-1 left-1 bg-[#212529] text-[10px] text-white pl-2 pr-2.5 py-0.5 rounded-xl font-medium">
            <div className="w-[9px] h-[9px] bg-[#d00000] rounded-full"></div>
            {data.status}
          </div>
        )}

        <div className="absolute left-1 bottom-1 flex gap-1">
          {/* ------- Anime Rank 1, 2 & 3 ------- */}
          {data.rank == 1 && (
            <p className={`bg-[#ffc600] py-1 px-2 rounded-md text-white flex`}>
              <FaCrown />
            </p>
          )}
          {data.rank == 2 && (
            <p className={`bg-[#6C757D] py-1 px-2 rounded-md text-white flex`}>
              <FaCrown />
            </p>
          )}
          {data.rank == 3 && (
            <p className={`bg-[#9d6806] py-1 px-2 rounded-md text-white flex`}>
              <FaCrown />
            </p>
          )}

          {/* ------- Anime Score ------- */}
          {data.score != null && (
            <p className="bg-[#25A18E] text-white px-2 py-1 rounded-md text-sm font-semibold">
              {data.score}
            </p>
          )}
        </div>
      </div>
      {/* ------- Anime Short Info ------- */}
      <div
        className="p-2 flex flex-col justify-between flex-1"
        onClick={() => {
          console.log(data.title);
        }}>
        <h3 className="text-white font-semibold">
          {truncateString(
            data.title_english != null
              ? data.title_english
              : data.title != null
              ? data.title
              : data.title_japanese,
            titleCount,
            data.mal_id
          )}
        </h3>

        <div className="overflow-hidden">
          <p className="text-[#CED4DA] text-xs mb-1 mt-2">
            {data.status === "Not yet aired" ? `Release` : `Released`}:{" "}
            {data.season != null &&
              data.season.charAt(0).toUpperCase() + data.season.slice(1)}{" "}
            {data.year != null
              ? data.year
              : data.aired.prop.from.year != null
              ? data.aired.prop.from.year
              : `N/A`}
          </p>

          <div className="flex gap-1 min-w-[500px]">
            {/* ------- genres ------- */}
            {data.genres.length > 0 &&
              data.genres != null &&
              data.genres.map((data: any) => {
                return (
                  <p
                    className="text-xs text-white bg-[#343A40] p-1 rounded-sm"
                    key={data.mal_id}>
                    {data.name}
                  </p>
                );
              })}
            {/* ------- themes ------- */}
            {data.themes.length > 0 &&
              data.themes != null &&
              data.themes.map((data: any) => {
                return (
                  <p
                    className="text-xs text-white bg-[#343A40] p-1 rounded-sm"
                    key={data.mal_id}>
                    {data.name}
                  </p>
                );
              })}
            {/* ------- demographics ------- */}
            {data.demographics.length > 0 &&
              data.demographics != null &&
              data.demographics.map((data: any) => {
                return (
                  <p
                    className="text-xs text-white bg-[#343A40] p-1 rounded-sm"
                    key={data.mal_id}>
                    {data.name}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      {/* ------- Anime Summary Hover Effect ------- */}

      {hoverInfo && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full h-full bg-[#000]/90 p-3 overflow-hidden flex flex-col justify-between">
          <div>
            <h4 className="mb-3 text-left text-white font-semibold">
              {data.title_english != null
                ? data.title_english
                : data.title != null
                ? data.title
                : data.title_japanese}
            </h4>
            <p className="text-white text-xs text-left">
              {data.synopsis != null
                ? truncateString(data.synopsis, infoCount, data.mal_id)
                : ""}
            </p>
          </div>

          <Link
            href={`/animeinfo/${data.mal_id}`}
            style={{ textDecoration: "none" }}>
            <button className="bg-[#25A18E] mb-2 text-white py-2 px-2 rounded-sm w-full cursor-pointer font-semibold hover:bg-[#26c7af]">
              See More
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default AnimeCard;
