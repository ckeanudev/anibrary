"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavlinksProps {
  href: string;
  setShowMenu: any;
  children: any;
}

const Navlinks: FC<NavlinksProps> = ({ href, setShowMenu, children }) => {
  let segment = usePathname();
  let active = href == `${segment == null ? "" : `${segment}`}`;

  return (
    <Link style={{ textDecoration: "none" }} href={href}>
      <p
        onClick={() => {
          setShowMenu(false);
        }}
        className={`py-1.5 px-2.5  mb-3 lg:mb-0 mr-0 lg:mr-1 text-lg lg:text-base ${
          active
            ? `bg-[#25A18E] text-white font-medium`
            : `text-[#DEE2E6] bg-[#212529] lg:bg-transparent lg:hover:bg-white/10`
        }  rounded-md cursor-pointer text-center`}>
        {children}
      </p>
    </Link>
  );
};

export default Navlinks;
