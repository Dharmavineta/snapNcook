import Footer from "@/components/ui-components/Footer";
import Info from "@/components/ui-components/Info";
import MarqueeComponent from "@/components/ui-components/MarqueeComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="relative">
        <div className="w-full h-[400px] lg:h-[600px] relative">
          <Image
            src={"/cook.gif"}
            alt="cook"
            width={100}
            height={100}
            className="w-full h-full object-cover object-top"
          />
          <div className="bg-gradient-to-l from-neutral-700 w-full top-0 h-full absolute flex flex-col justify-center items-center lg:items-end gap-y-5 text-white px-10 lg:px-24">
            <h1 className="text-2xl text-center lg:text-right max-w-prose lg:text-5xl font-semibold font-mono leading-tight  text-slate-300">
              Cooking reimagined: Snap a pic, get a recipe!{" "}
            </h1>
            <Link
              href={"/cook"}
              className="py-2 px-5 font-semibold text-white bg-cyan-600 hover:bg-cyan-700 rounded-sm hover:rounded-md transition-all duration-300 hover:ring-1 hover:ring-sky-700"
            >
              Start Cooking
            </Link>
          </div>
        </div>
      </div>
      <div>
        <MarqueeComponent />
        <Info />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
