"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavlinksProps {
  href: string;
  children: any;
}

const Navlinks: FC<NavlinksProps> = ({ href, children }) => {
  let segment = usePathname();
  let active = href == `${segment == null ? "" : `${segment}`}`;

  return (
    <Link style={{ textDecoration: "none" }} href={href}>
      <p
        className={`py-1.5 px-2.5 mr-1 ${
          active
            ? `bg-[#25A18E] text-[#white] font-medium`
            : `text-[#DEE2E6] bg-transparent hover:bg-[#212529]`
        }  rounded-md cursor-pointer `}>
        {children}
      </p>
    </Link>
  );
};

export default Navlinks;
