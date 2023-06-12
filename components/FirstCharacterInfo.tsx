import Image from "next/image";
import { FC } from "react";

interface FirstCharacterInfoProps {
  loading: boolean;
  data: any;
}

const FirstCharacterInfo: FC<FirstCharacterInfoProps> = ({ loading, data }) => {
  return (
    <div className="flex flex-col md:flex-row p-3 md:p-5 gap-5 min-h-[250px]">
      <div className="min-w-full h-[130px] md:h-0 md:min-w-[240px] relative ">
        <Image
          src={data.images.jpg.image_url}
          alt="Character Image"
          width={200}
          height={320}
          className="rounded-lg absolute top-[-100px] left-[50%] translate-x-[-50%] w-[150px] md:min-w-[200px] drop-shadow-md"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-white text-xl md:text-3xl font-semibold mb-1 md:mb-3">
          {data.name != null && data.name}
        </h1>

        <p
          className="text-[#DEE2E6] text-xs md:text-sm"
          style={{ whiteSpace: "pre-line" }}>
          {data.about != null && data.about}
        </p>
      </div>
    </div>
  );
};

export default FirstCharacterInfo;
