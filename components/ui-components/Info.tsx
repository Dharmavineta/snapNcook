import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="mt-10 lg:mt-20 max-w-[1440px] px-5 lg:px-10 mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-y-0">
        <div className="w-1/2">
          <Image
            src={"/food.png"}
            alt=""
            height={200}
            width={200}
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-xl lg:text-3xl text-zinc-400 text-center lg:text-left">
            The best Food AI you&apos;ll ever come across
          </h1>
          <p className="text-center text-zinc-300 mt-5 max-w-prose lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas
            iure assumenda, cumque dolor reprehenderit consectetur fuga.
            Voluptatibus numquam laudantium qui sit eaque culpa! Tenetur
            molestias ea accusamus dicta vitae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
