"use client";
import { motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import RecomendCard from "./RecomendCard";

interface ThirdAnimeInfoProps {
  loading: boolean;
  success: boolean;
  data: any;
}

const ThirdAnimeInfo: FC<ThirdAnimeInfoProps> = ({
  loading,
  success,
  data,
}) => {
  const [widthSlider, setWidthSlider] = useState(0);
  const slider = useRef<any>(null);

  useEffect(() => {
    setWidthSlider(slider?.current?.scrollWidth - slider?.current?.offsetWidth);
  }, [loading]);

  return (
    <div className="flex flex-col py-5">
      {success && data?.length > 0 && data != null && (
        <h1 className="text-white font-semibold text-2xl mb-3 px-3">
          Similar to this anime
        </h1>
      )}

      {success && data?.length == 0 && data == null && (
        <p className="text-[#CED4DA] px-3">No similar yet</p>
      )}

      {success && data?.length > 0 && (
        <motion.div
          ref={slider}
          className="max-w-full overflow-hidden cursor-grab">
          <motion.div
            drag="x"
            whileTap={{ cursor: "grabbing" }}
            dragConstraints={{ right: 0, left: -widthSlider }}
            className="px-3 py-1 flex gap-3">
            {/* ------- Anime Card ------- */}

            {data.map((data: any) => {
              return <RecomendCard data={data} key={data.entry.mal_id} />;
            })}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ThirdAnimeInfo;
