"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimeCard from "./AnimeCard";
import { tempLoading } from "./tempData";
import { Skeleton } from "@/components/ui/skeleton";

type MainAnimeProps = {
  title: string;
  loading: boolean;
  data: any;
};

const MainAnime: React.FunctionComponent<MainAnimeProps> = ({
  title,
  loading,
  data,
}) => {
  const [widthSlider, setWidthSlider] = useState(0);
  const slider = useRef<any>(null);

  useEffect(() => {
    setWidthSlider(slider?.current?.scrollWidth - slider?.current?.offsetWidth);
  }, [loading]);

  return (
    <div className="mb-5">
      <div className="w-full flex justify-between items-center p-3">
        <div className="flex items-center gap-2">
          <div className="w-[16px] h-[16px] bg-[#25A18E] rounded-full"></div>
          {/* <div className="w-[16px] h-[16px] bg-[#f72585] rounded-full"></div> */}
          <h2 className="text-[#fff] text-2xl font-semibold">{title || ""}</h2>
        </div>

        <p className="text-[#fff] font-semibold ">View All</p>
      </div>

      {loading ? (
        <motion.div
          ref={slider}
          className="max-w-full overflow-hidden cursor-grab">
          <motion.div
            drag="x"
            whileTap={{ cursor: "grabbing" }}
            dragConstraints={{ right: 0, left: -widthSlider }}
            className="px-3 py-1 flex gap-3">
            {/* ------- Loader Anime Card ------- */}
            {tempLoading.map((data: number) => {
              return (
                <div key={data} className="bg-[#1C2024]">
                  {/* Image Loader */}
                  <Skeleton className="w-[200px] h-[300px]" />

                  {/* Info Loader */}
                  <div className="p-2 flex flex-col justify-between flex-1">
                    <Skeleton className="w-[160px] h-[14px] mb-10" />
                    <Skeleton className="w-[60px] h-[8px] mb-3" />
                    <Skeleton className="w-[100px] h-[10px]" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          ref={slider}
          className="max-w-full overflow-hidden cursor-grab">
          <motion.div
            drag="x"
            whileTap={{ cursor: "grabbing" }}
            dragConstraints={{ right: 0, left: -widthSlider }}
            className="px-3 py-1 flex gap-3">
            {/* ------- Anime Card ------- */}
            {data?.data?.data?.map((data: any, i: number) => {
              return <AnimeCard data={data} key={i} />;
            })}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MainAnime;
