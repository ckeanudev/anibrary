import CollectionSeasonNow from "@/components/CollectionSeasonNow";

export const metadata = {
  title: "AniBrary | New Seasons",
  description: "A website containing collections of anime",
};

const page = () => {
  return (
    <main className="bg-[#161A1D] w-full text-white">
      <CollectionSeasonNow />
    </main>
  );
};

export default page;
