"use client";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";

interface CharacterInfoProps {
  characterInfoId: any;
}

const CharacterInfo: FC<CharacterInfoProps> = ({ characterInfoId }) => {
  const fetchCharacterInfo = () => {
    return axios.get(
      `https://api.jikan.moe/v4/characters/${characterInfoId}/full`
    );
  };

  const { isLoading: loadingCharacterInfoFull, data: dataCharacterInfoFull } =
    useQuery(`characterInfo`, fetchCharacterInfo, {
      onError: (err) => {
        console.log(err);
      },
      onSuccess: (res) => {
        console.log(res.data.data);
      },
    });

  return <div>CharacterInfo</div>;
};

export default CharacterInfo;
