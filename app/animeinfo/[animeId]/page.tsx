"use client";
import { FC } from "react";

interface AnimeInfoPageProps {
  params: {
    animeId: string;
  };
}

const AnimeInfoPage: FC<AnimeInfoPageProps> = ({ params }) => {
  console.log(params);

  return <main>Hello</main>;
};

export default AnimeInfoPage;
