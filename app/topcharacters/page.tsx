import CollectionTopCharacter from "@/components/CollectionTopCharacter";

export const metadata = {
  title: "AniBrary | Top Characters",
  description: "A website containing collections of anime",
};

const page = () => {
  return (
    <main className="bg-[#161A1D] w-full text-white">
      <CollectionTopCharacter />
    </main>
  );
};

export default page;
