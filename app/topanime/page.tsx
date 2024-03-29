import CollectionTopAnime from "@/components/CollectionTopAnime";

export const metadata = {
  title: "AniBrary | Top Anime",
  description: "A website containing collections of anime",
};

const page = () => {
  return (
    <main className="bg-[#161A1D] w-full text-white">
      <CollectionTopAnime />
    </main>
  );
};

export default page;
