import CollectionMain from "@/components/CollectionMain";

export const metadata = {
  title: "AniBrary | Collections",
  description: "A website containing collections of anime",
};

const page = () => {
  return (
    <main className="bg-[#161A1D] w-full ">
      <CollectionMain />
    </main>
  );
};

export default page;
