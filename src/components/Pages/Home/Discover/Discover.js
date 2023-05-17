import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discover = () => {
  return (
    <div className="w-full flex items-center justify-center gap-5 py-24">
      <div className="w-5/12 relative  ">
        <div className="w-[250px] h-[250px] absolute -top-28 -left-16">
          <Image src="/images/common/square-dot.png" alt="" fill />
        </div>
        <div className="w-[350px] h-[400px] relative mx-auto">
          <Image src="/images/home/section3.png" alt="" fill />
        </div>
      </div>
      <div className="w-7/12 flex flex-col items-start gap-5 ">
        <h2 className="antialiased bigger text-5xl">
          Discover your English level by taking our free online English test
        </h2>
        <Link
          href=""
          className="text-blue-primary tracking-wider text-lg font-medium underline underline-offset-2"
        >
          Click here for more information
        </Link>
      </div>
    </div>
  );
};

export default Discover;
