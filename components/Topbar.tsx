import { Input } from "@/components/ui/input";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="w-screen fixed top-0 left-0 flex justify-between items-center py-2.5 px-6 bg-[#161A1D]/60 backdrop-blur z-10">
      <Link href="/" style={{ textDecoration: "none" }}>
        <h1
          className="text-2xl text-[#fff] font-bold"
          style={{ letterSpacing: "3px" }}>
          Ani<strong className="text-[#25A18E] font-bold">Brary</strong>
        </h1>
      </Link>

      <div>
        <Input
          className="w-[300px] bg-[#F8F9FA]"
          placeholder="Search your favorite anime"
        />
      </div>
    </div>
  );
};

export default Topbar;
