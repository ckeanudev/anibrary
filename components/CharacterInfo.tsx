"use client";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";
import FirstCharacterInfo from "./FirstCharacterInfo";

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

  return (
    <div className="max-w-[1200px] min-h-screen mx-auto pb-10">
      {!loadingCharacterInfoFull && (
        <FirstCharacterInfo
          loading={loadingCharacterInfoFull}
          data={dataCharacterInfoFull?.data.data}
        />
      )}
    </div>
  );
};

export default CharacterInfo;
