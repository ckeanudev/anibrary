import { FC } from "react";
import Topbar from "@/components/Topbar";
import CharacterInfo from "@/components/CharacterInfo";

export const metadata = {
  title: "AniBrary | Character Info",
  description: "A website containing collections of anime",
};

interface CharacterInfoPageProps {
  params: {
    characterId: any;
  };
}

const CharacterInfoPage: FC<CharacterInfoPageProps> = ({ params }) => {
  console.log(params);

  return (
    <main className="relative">
      <Topbar />

      <div className="bg-[#161A1D] h-[160px] md:h-[230px] w-full bg-[url('/images/animeinfo-wall.svg')] bg-cover bg-center"></div>

      <section className="w-full bg-[#161A1D]">
        <CharacterInfo characterInfoId={params.characterId} />
      </section>
    </main>
  );
};

export default CharacterInfoPage;
