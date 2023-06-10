import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface RecomendCardProps {
  data: any;
}

const RecomendCard: FC<RecomendCardProps> = ({ data }) => {
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
      className="flex flex-col min-w-[150px] relative rounded-md overflow-hidden"
      onMouseEnter={() => {
        setHoverInfo(true);
      }}
      onMouseLeave={() => {
        setHoverInfo(false);
      }}>
      <div className="flex">
        <Image
          src={data.entry.images.jpg.large_image_url}
          alt="Recommendations Images"
          width={200}
          height={280}
          className="w-full h-[240px] object-cover object-center rounded-md"
          draggable={false}
        />
      </div>
      <div className="py-2">
        <h4 className="text-white text-sm font-semibold">
          {truncateString(data.entry.title, 31, data.entry.mal_id)}
        </h4>
      </div>

      {hoverInfo && (
        <div className="flex flex-col justify-between absolute top-0 left-0 w-full h-full bg-[#000]/80 p-3">
          <h4 className="text-white text-lg font-semibold text-left text">
            {data.entry.title}
          </h4>

          <Link
            href={`/animeinfo/${data.entry.mal_id}`}
            style={{ textDecoration: "none" }}>
            <button className="bg-[#25A18E] text-white py-1 px-2 rounded-sm w-full cursor-pointer font-semibold hover:bg-[#26c7af]">
              See More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecomendCard;
