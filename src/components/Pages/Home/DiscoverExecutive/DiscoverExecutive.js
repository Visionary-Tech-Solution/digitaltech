import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const DiscoverExecutive = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-16 place-items-center">
      <div className="flex flex-col items-start gap-5 ">
        <h2 className="antialiased ">
          Discover our online English courses with Executive eLearning
        </h2>
        <p className="text-gray-secondary pr-16 tracking-wider text-lg">
          Improve your English speaking, listening, reading and writing skills
          with our selection of online courses. Experience self-study sessions,
          live group classes and one-to-one courses with personal tutors in a
          safe and inclusive learning environment.
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
        <div className="w-[250px] h-[250px] absolute -top-28 -left-16">
          <Image src="/images/common/square-dot.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default DiscoverExecutive;
