import { FC } from "react";
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
  return (
    <main className="relative">
      <div className="bg-[#161A1D] h-[160px] md:h-[230px] w-full bg-[url('/images/animeinfo-wall.svg')] bg-cover bg-center absolute md:static top-0 left-0"></div>

      <section className="w-full bg-[#161A1D] pt-16 md:pt-0 ">
        <CharacterInfo characterInfoId={params.characterId} />
      </section>
    </main>
  );
};

export default CharacterInfoPage;
