import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
const HomeHero = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-16 place-items-center">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="antialiased bigger-bold">Online eLearning 100%</h1>
        <p className="text-gray-secondary pr-16 tracking-wider text-lg">
          Improve your confidence in communications, and level up on your
          English skills. Live classes and interactive lessons online. (coming
          soon)
        </p>
        <Button
          variant="contained"
          className="bg-blue-primary mt-5 font-poppins capitalize px-2.5"
        >
          Find Out More
        </Button>
      </div>
      <div className="w-full relative  ">
        <div className="w-[400px] h-[400px] relative ml-auto">
          <Image src="/images/home/hero.png" alt="" fill />
        </div>
        <div className="px-2 py-1 border shadow-sm  shadow-gray-300 bg-white absolute left-10 rounded-sm top-0 flex justify-evenly items-center w-[159px] h-[63px]">
          <div className="bg-sky-primary w-[30px] h-[26px] rounded flex justify-center items-center ml-2.5">
            <Image src="/images/home/icon.png" alt="" width={18} height={18} />
          </div>
          <span className="w-fit text-xs font-playfair ml-3">
            Learn from Industry Experts
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
