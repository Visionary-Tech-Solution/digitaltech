import Link from "next/link";
import React from "react";

const DropdownLinks = ({ title }) => {
  return (
    <div className="w-max relative group ">
      <Link className=" " href="#">
        {title}
      </Link>
      {/* <div className="w-44 absolute hidden  group-hover:flex flex-col  divide-y divide-gray-theme pt-4">
        <Link
          className=" bg-white bg-opacity-80 w-full text-left p-2"
          href={"/services/demo"}
        >
          Advisory
        </Link>
        <Link
          className=" bg-white bg-opacity-80 w-full text-left p-2"
          href={"/services/demo"}
        >
          Assurance
        </Link>
        <Link
          className=" bg-white bg-opacity-80 w-full text-left p-2"
          href={"/services/demo"}
        >
          TAX
        </Link>
        <Link
          className=" bg-white bg-opacity-80 w-full text-left p-2"
          href={"/services/demo"}
        >
          Cyber Security
        </Link>
      </div> */}
    </div>
  );
};

export default DropdownLinks;
