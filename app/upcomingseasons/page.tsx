import CollectionNavbar from "@/components/CollectionNavbar";
import CollectionUpcomingSeason from "@/components/CollectionUpcomingSeason";

export const metadata = {
  title: "AniBrary | Upcoming Season",
  description: "A website containing collections of anime",
};

const page = () => {
  return (
    <main className="bg-[#161A1D] w-full text-white">
      <CollectionNavbar />
      <CollectionUpcomingSeason />
    </main>
  );
};

export default page;