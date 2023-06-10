import CollectionMain from "@/components/CollectionMain";
import React from "react";

export const metadata = {
  title: "AniBrary Collections",
  description: "A website containing collections of anime",
};

const page = () => {
  return (
    <main className="bg-[#161A1D] w-full text-white">
      <CollectionMain />
    </main>
  );
};

export default page;
