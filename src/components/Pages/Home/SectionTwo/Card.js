import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="border shadow-sm  shadow-gray-300 bg-white w-[380px] h-[460px] overflow-hidden flex flex-col items-start">
      <div className="w-full h-[236px] relative overflow-hidden">
        <Image src="/images/home/card.png" fill alt="" />
      </div>
      <div className="p-3 flex flex-col gap-3 ">
        <h3>Self-study online course</h3>
        <p className="text-black font-medium tracking-wider">
          Improve your English skills at your own pace, by watching animation
          videos
        </p>
        <Button
          variant="contained"
          className="bg-blue-primary mt-5 font-poppins capitalize px-2.5 w-max"
        >
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default Card;
