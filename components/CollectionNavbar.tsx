import { Input } from "@/components/ui/input";
import Link from "next/link";

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
        <div className="w-[6px] h-[30px] bg-[#25A18E] mx-3 rounded-md"></div>

        <p className="text-[#DEE2E6] py-2 px-2.5 hover:bg-[#212529] rounded-md cursor-pointer ">
          New Season
        </p>
        <p className="text-[#DEE2E6] py-2 px-2.5 hover:bg-[#212529] rounded-md cursor-pointer ">
          Top Anime
        </p>
        <p className="text-[#DEE2E6] py-2 px-2.5 hover:bg-[#212529] rounded-md cursor-pointer ">
          Top Upcoming
        </p>
        <p className="text-[#DEE2E6] py-2 px-2.5 hover:bg-[#212529] rounded-md cursor-pointer ">
          Top Character
        </p>
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
