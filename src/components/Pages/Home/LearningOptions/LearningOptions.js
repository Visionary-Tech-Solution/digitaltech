import Image from "next/image";
import Link from "next/link";
import React from "react";
import Paper from "./Paper";

const LearningOptions = () => {
  return (
    <div className="flex flex-col items-center my-10 gap-6">
      <h2 className="text-center bigger">General English learning options</h2>
      <p className="text-center tracking-wider px-6 text-black ">
        Find extra listening and reading practice to help you improve your level
        of English and practice language you can use in everyday situations.
        With Executive eLearning you can improve your knowledge of everyday
        English and learn the language you need for socializing and traveling.
        You will also develop your comprehension skills and build your
        vocabulary as well as boost your confidence.
      </p>
      <div className="flex flex-col items-center py-10 gap-28">
        <Paper index={0} />
        <Paper index={1} />
        <Paper index={2} />
      </div>
    </div>
  );
};

export default LearningOptions;
