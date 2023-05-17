import React from "react";
import Card from "./Card";

const SectionTwo = () => {
  return (
    <div className="flex flex-col items-center my-10 gap-6">
      <h1 className="text-center">Welcome to Executive eLearning</h1>
      <p className="text-center tracking-wider px-2">
        Join Executive eLearning online and improve your skills, communications
        and most importantly build your confidence and remove your shyness
        totally. All our high-quality courses, animation video, resources and
        team members for live streaming all have be bespoke designed for Thai
        government officials across the nation. All of our courses are designed
        according to British standards by team of English teaching experts from
        London, United Kingdom which is suitable for both adults and children
        for beginners&apos; level and advance levels.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SectionTwo;
