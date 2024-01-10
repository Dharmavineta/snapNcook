"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  const images = [
    { id: 1, src: "/pic1.jpg" },
    { id: 2, src: "/pic2.jpg" },
    { id: 3, src: "/pic3.jpg" },
    { id: 4, src: "/pic4.jpg" },
    { id: 5, src: "/pic5.jpg" },
    { id: 6, src: "/pic6.jpg" },
    { id: 7, src: "/pic7.jpg" },
  ];
  const images2 = [
    { id: 1, src: "/pic8.jpg" },
    { id: 2, src: "/pic9.jpg" },
    { id: 3, src: "/pic10.jpg" },
    { id: 4, src: "/pic1.jpg" },
    { id: 5, src: "/pic5.jpg" },
    { id: 6, src: "/pic7.jpg" },
    { id: 7, src: "/pic4.jpg" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="rotate-[-3deg] mt-10 md:mt-20 ">
      <div className=" flex flex-col gap-y-10">
        <Marquee>
          {images.map((img) => (
            <Image
              src={img.src}
              key={img.id}
              alt=""
              width={500}
              height={500}
              className="w-[250px] h-[250px] lg:2-[350px] lg:h-[350px] object-cover"
            />
          ))}
        </Marquee>
        <Marquee>
          {images2.map((img) => (
            <Image
              src={img.src}
              key={img.id}
              alt=""
              width={500}
              height={500}
              className="w-[250px] h-[250px] lg:2-[350px] lg:h-[350px] object-cover"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComponent;
