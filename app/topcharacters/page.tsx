import CollectionNavbar from "@/components/CollectionNavbar";

export const metadata = {
  title: "AniBrary | Top Characters",
  description: "A website containing collections of anime",
};

const page = () => {
  return (
    <main className="bg-[#161A1D] w-full text-white">
      <CollectionNavbar />
    </main>
  );
};

export default page;
