import Link from "next/link";
import React from "react";
import DropdownLinks from "./DropdownLinks";

const Links = () => {
  return (
    <div className="w-8/12 py-1 lg:flex items-center justify-between gap-x-4 hidden text-center text-black">
      <div className="w-10">
        <Link className="" href="/">
          Home
        </Link>
      </div>
      <DropdownLinks title={"Online Courses"} />
      <DropdownLinks title={"Our Lessons"} />
      <div className="w-max">
        {" "}
        <Link className="" href="/">
          Price Plan
        </Link>
      </div>
      <div className="w-20">
        <Link className="" href="/">
          About Us
        </Link>
      </div>
      <div className="w-max ml-6 flex items-center justify-center gap-x-3">
        <div className="w-20">
          <Link
            className="text-blue-primary text-sm font-bold leading-5"
            href="/"
          >
            Login
          </Link>
        </div>
        <Link href="" className="border border-black rounded-[6px] py-1.5 px-4">
          Register
        </Link>
        <Link
          href=""
          className="border border-red-primary text-red-primary rounded-[6px] py-1.5 px-4"
        >
          Admin Log
        </Link>
      </div>
    </div>
  );
};

export default Links;
