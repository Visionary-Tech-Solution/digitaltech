import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-primary h-max pt-5 lg:pt-10 text-black ">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-content-start">
        <div className="flex flex-col items-start">
          <h3 className="text-xl-1 ">Online Course</h3>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"#"}>Live Online Classes</Link>
            </li>
            <li>
              <Link href={"#"}>Personal Online Tutoring</Link>
            </li>
            <li>
              <Link href={"#"}>Self-study online</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl-1 ">Skills</h3>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"#"}>Listening</Link>
            </li>
            <li>
              <Link href={"#"}>Reading</Link>
            </li>
            <li>
              <Link href={"#"}>Speaking</Link>
            </li>
            <li>
              <Link href={"#"}>Writing</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl-1 ">Grammar</h3>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"#"}>A1-A2 Grammar</Link>
            </li>
            <li>
              <Link href={"#"}>B1-B2 Grammar</Link>
            </li>
            <li>
              <Link href={"#"}>English grammar reference</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl-1 ">Vocabulary</h3>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"#"}>A1-A2 Vocabulary</Link>
            </li>
            <li>
              <Link href={"#"}>B1-B2 Vocabulary</Link>
            </li>
            <li>
              <Link href={"#"}>Vocabulary games</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl-1 ">General English</h3>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"#"}>Apps</Link>
            </li>
            <li>
              <Link href={"#"}>Audio series</Link>
            </li>
            <li>
              <Link href={"#"}>Audio zone</Link>
            </li>
            <li>
              <Link href={"#"}>Community Events</Link>
            </li>
            <li>
              <Link href={"#"}>Learn english webinars</Link>
            </li>
            <li>
              <Link href={"#"}>Magazine zone</Link>
            </li>
            <li>
              <Link href={"#"}>Story zone</Link>
            </li>
            <li>
              <Link href={"#"}>Video Series</Link>
            </li>
            <li>
              <Link href={"#"}>Video zone</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl-1 ">English Levels</h3>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"#"}>Online English level test</Link>
            </li>
            <li>
              <Link href={"#"}>Improve Your English Level</Link>
            </li>
            <li>
              <Link href={"#"}>Understand your English level</Link>
            </li>
          </ul>
          <p className="text-sm font-semibold mt-10">Address</p>
          <p className=" text-xs flex flex-col gap-3 mt-4">
            2972 Westheimer Rd. Santa Ana, Illinois 85486, Thailand
          </p>
        </div>
      </div>
      <p className="text-xs text-[#777777] text-center pt-10">
        © All Copyrights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
