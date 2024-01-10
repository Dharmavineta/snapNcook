import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between w-full flex-wrap text-zinc-200 gap-20 px-10 md:px-20 lg:px-28 mt-36">
        <Link className="text-xl" href={"/"}>
          Snap
          <span className="bg-orange-500 bg-clip-text text-transparent">N</span>
          cook
        </Link>{" "}
        <div className=" flex-wrap flex gap-20">
          <div className=" flex flex-col gap-y-10">
            <h1 className="font-semibold">Contact</h1>
            <div className="flex flex-col gap-y-4">
              <h1>Facebook</h1>
              <h1>Twitter</h1>
              <h1>Instagram</h1>
              <h1>Twitter</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-y-10">
            <h1 className="font-semibold">FAQ</h1>
            <div className="flex flex-col gap-y-4">
              <h1>Facebook</h1>
              <h1>Twitter</h1>
              <h1>Instagram</h1>
              <h1>Twitter</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-y-10">
            <h1 className="font-semibold">Contact</h1>
            <div className="flex flex-col gap-y-4">
              <h1>Facebook</h1>
              <h1>Twitter</h1>
              <h1>Instagram</h1>
              <h1>Twitter</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5">
            <h1 className="font-semibold">Contact</h1>
            <div className="flex flex-col gap-y-4">
              <input
                placeholder="Enter your Email..."
                className="py-2 px-4 rounded-md bg-zinc-200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
