"use client";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";
import FirstCharacterInfo from "./FirstCharacterInfo";
import Footer from "./Footer";
import { ImSpinner9 } from "react-icons/im";

interface CharacterInfoProps {
  characterInfoId: any;
}

const CharacterInfo: FC<CharacterInfoProps> = ({ characterInfoId }) => {
  const fetchCharacterInfo = () => {
    return axios.get(
      `https://api.jikan.moe/v4/characters/${characterInfoId}/full`
    );
  };

  const {
    isLoading: loadingCharacterInfoFull,
    isSuccess: successCharacterInfoFull,
    data: dataCharacterInfoFull,
  } = useQuery(`characterInfo`, fetchCharacterInfo, {
    onError: (err) => {
      console.log(`Oops! something went wrong`);
      console.log(err);
    },
    onSuccess: (res) => {
      console.log(`Data fetched successfully`);
    },
  });

  return (
    <>
      <div className="max-w-[1200px] min-h-screen mx-auto pb-10">
        {/* --------- Loader --------- */}

        {loadingCharacterInfoFull && (
          <div className="flex items-center justify-center w-full pt-10">
            <p className="flex animate-spin text-[#25A18E]">
              <ImSpinner9 className="flex" size={50} />
            </p>
          </div>
        )}

        {successCharacterInfoFull && (
          <FirstCharacterInfo
            loading={loadingCharacterInfoFull}
            data={dataCharacterInfoFull?.data.data}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default CharacterInfo;
