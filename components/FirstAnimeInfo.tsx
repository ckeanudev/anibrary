import Image from "next/image";
import { FC } from "react";

interface FirstAnimeInfoProps {
  loading: boolean;
  data: any;
}

const FirstAnimeInfo: FC<FirstAnimeInfoProps> = ({ loading, data }) => {
  return (
    <div className="flex p-5 gap-5 min-h-[250px]">
      <div className="min-w-[240px] relative ">
        <Image
          src={data.images.jpg.large_image_url}
          alt=""
          width={220}
          height={312}
          className="rounded-lg absolute top-[-100px] left-[50%] translate-x-[-50%] min-w-[220px] drop-shadow-md"
        />
      </div>
      <div className="flex-1">
        <div></div>
        <h1 className="text-white text-3xl font-semibold mb-3">
          {data.title_english != null
            ? data.title_english
            : data.title != null
            ? data.title
            : data.title_japanese}
        </h1>

        <p className="text-[#DEE2E6] text-sm">
          {data.synopsis != null ? data.synopsis : ""}
        </p>
      </div>
    </div>
  );
};

export default FirstAnimeInfo;
