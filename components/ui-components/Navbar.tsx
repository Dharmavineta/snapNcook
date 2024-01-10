import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed h-16 border-b border-b-slate-600 top-0 left-0 text-white w-full px-5 lg:px-0 z-50 bg-gradient-to-r  from-[#0f2027] via-[#203a43] to-[#2c5364] ">
      <div className="flex justify-between items-center h-full max-w-[1440px] mx-auto">
        <div>
          <Link className="text-xl" href={"/"}>
            Snap
            <span className="bg-orange-500 bg-clip-text text-transparent">
              N
            </span>
            cook
          </Link>
        </div>
        <div>
          <Link href={"/"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
