import Link from "next/link";
import React from "react";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Card() {
  return (
    <div className="w-full h-full p-5 text-white rounded-md bg-primary">
      <span className="block p-3 bg-white rounded-full w-fit">
        <BsLaptop className="w-6 h-6 text-primary" />
      </span>
      <h1 className="max-w-[80%] text-xl font-medium mt-2">
        Website Design And Development
      </h1>
      <p className="mt-1 mb-5 text-sm opacity-70">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        suscipit.
      </p>
      <Link href="/" passHref>
        <a className="flex items-end justify-center px-3 py-2 space-x-1 text-sm transition-transform duration-200 bg-white rounded-md text-primary w-fit hover:scale-110">
          <span>Learn more</span> <AiOutlineArrowRight className="w-4 h-4" />
        </a>
      </Link>
    </div>
  );
}
