import AnimeInfo from "@/components/AnimeInfo";
import { FC } from "react";
import Topbar from "@/components/Topbar";

export const metadata = {
  title: "AniBrary | Anime Info",
  description: "A website containing collections of anime",
};

interface AnimeInfoPageProps {
  params: {
    animeId: any;
  };
}

const AnimeInfoPage: FC<AnimeInfoPageProps> = ({ params }) => {
  return (
    <main className="relative">
      <Topbar />

      <div className="bg-[#161A1D] h-[160px] md:h-[230px] w-full bg-[url('/images/animeinfo-wall.svg')] bg-cover bg-center"></div>
      <section className="w-full bg-[#161A1D]">
        <AnimeInfo animeInfoId={params.animeId} />
      </section>
    </main>
  );
};

export default AnimeInfoPage;
