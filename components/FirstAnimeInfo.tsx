import Image from "next/image";
import { FC } from "react";

interface FirstAnimeInfoProps {
  loading: boolean;
  data: any;
}

const FirstAnimeInfo: FC<FirstAnimeInfoProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row p-3 md:p-5 gap-5 min-h-[250px]">
      <div className="min-w-full h-[105px] md:h-0 md:min-w-[240px] relative ">
        <Image
          src={data.images.jpg.large_image_url}
          alt=""
          width={220}
          height={312}
          className="rounded-lg absolute top-[-100px] left-[50%] translate-x-[-50%] w-[150px] md:min-w-[220px] drop-shadow-md"
        />
      </div>
      <div className="flex-1">
        <div></div>
        <h1 className="text-white text-xl md:text-3xl font-semibold mb-1 md:mb-3">
          {data.title_english != null
            ? data.title_english
            : data.title != null
            ? data.title
            : data.title_japanese}
        </h1>

        <p className="text-[#DEE2E6] text-xs md:text-sm">
          {data.synopsis != null ? data.synopsis : ""}
        </p>
      </div>
    </div>
  );
};

export default FirstAnimeInfo;
