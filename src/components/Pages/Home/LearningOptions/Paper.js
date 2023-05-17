import Image from "next/image";
import Link from "next/link";
import React from "react";

const Paper = ({ index }) => {
  return (
    <div
      className={`w-full ${
        index % 2 === 0 ? "flex" : "flex flex-row-reverse"
      } justify-between`}
    >
      <div className="w-full flex flex-col gap-8">
        <h2>Apps</h2>
        <p className="text-black font-medium text-xl">
          Improve your English with our fun and exciting learning apps! Designed
          for all age and for you to enjoy with your family, our games,
          podcasts, videos and quizzes will help you learn English at home or on
          the move.
        </p>
        <Link
          href=""
          className="w-max border-2 font-semibold text-sm border-red-primary text-red-primary rounded-[6px] py-2 px-3"
        >
          Find Out More
        </Link>
      </div>
      <div className="w-full">
        <div
          className={`w-[380px] h-[420px] relative ${
            index % 2 === 0 ? "ml-auto" : "mr-auto"
          }`}
        >
          <Image src="/images/home/learning-options.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Paper;
