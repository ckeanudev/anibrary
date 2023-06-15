"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const CollectionNavbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className="w-full fixed top-0 flex justify-between items-center pt-2 pb-2.5 px-5 bg-[#161A1D]/60 backdrop-blur z-10">
      <div className="flex items-center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1
            className="text-lg md:text-xl text-[#fff] font-bold"
            style={{ letterSpacing: "3px" }}>
            Ani<strong className="text-[#25A18E] font-bold">Brary</strong>
          </h1>
        </Link>

        <div className="hidden lg:block w-[6px] h-[34px] bg-[#25A18E] mx-3 rounded-md"></div>

        <div
          style={{ transition: `0.3s ease` }}
          className={`fixed lg:static top-0  ${
            showMenu ? `left-0 ` : `left-[100%]`
          } h-screen lg:h-auto flex flex-col lg:flex-row bg-[#161A1D] lg:bg-transparent w-screen lg:w-auto py-5 lg:py-0 px-6 lg:px-0 `}>
          <div className=" flex lg:hidden justify-end mb-5">
            <p
              className="flex"
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}>
              <MdClose size={30} className="text-white cursor-pointer" />
            </p>
          </div>

          <div className="block lg:hidden">
            <Navlinks href="/" setShowMenu={setShowMenu}>
              Home
            </Navlinks>
          </div>
          <Navlinks href="/collection" setShowMenu={setShowMenu}>
            Collection
          </Navlinks>
          <Navlinks href="/newseasons" setShowMenu={setShowMenu}>
            New Season
          </Navlinks>
          <Navlinks href="/topanime" setShowMenu={setShowMenu}>
            Top Anime
          </Navlinks>
          <Navlinks href="/upcomingseasons" setShowMenu={setShowMenu}>
            Upcoming Season
          </Navlinks>
          <Navlinks href="/topcharacters" setShowMenu={setShowMenu}>
            Top Character
          </Navlinks>
        </div>
      </div>

      <p
        className="flex lg:hidden cursor-pointer"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}>
        <BiMenuAltRight size={32} className="text-white" />
      </p>

      {/* <div className="hidden lg:block">
        <Input
          className="w-[280px] bg-[#F8F9FA]"
          placeholder="Search your favorite anime"
        />
      </div> */}
    </nav>
  );
};

export default CollectionNavbar;
