import { Input } from "@/components/ui/input";
import Link from "next/link";
import Navlinks from "./Navlinks";

const CollectionNavbar = () => {
  return (
    <nav className="w-full fixed top-0 flex justify-between items-center py-2 px-5 bg-[#161A1D]/60 backdrop-blur z-10">
      <div className="flex items-center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1
            className="text-lg md:text-xl text-[#fff] font-bold"
            style={{ letterSpacing: "3px" }}>
            Ani<strong className="text-[#25A18E] font-bold">Brary</strong>
          </h1>
        </Link>
        <div className="w-[6px] h-[36px] bg-[#25A18E] mx-3 rounded-md"></div>

        <Navlinks href="/newseasons">New Season</Navlinks>
        <Navlinks href="/topanime">Top Anime</Navlinks>
        <Navlinks href="/upcomingseasons">Upcoming Season</Navlinks>
        <Navlinks href="/topcharacters">Top Character</Navlinks>
      </div>

      <div>
        <Input
          className="w-[300px] bg-[#F8F9FA]"
          placeholder="Search your favorite anime"
        />
      </div>
    </nav>
  );
};

export default CollectionNavbar;
