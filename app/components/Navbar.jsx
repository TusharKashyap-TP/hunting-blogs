import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className=" text-white font-bold mt-7   bg-black-950 ml-[15%] mr-[15%] rounded-4xl h-20 flex justify-center items-center   ">
        <div className="text-xl m-8  flex justify-center items-center gap-10">
          <Link className="cursor-pointer hover:text-blue-500 transition-colors duration-1000" href="/">Home</Link>
          <Link className="cursor-pointer hover:text-blue-500 transition-colors duration-1000" href="/blogs">Blogs</Link>
          <Link className="cursor-pointer hover:text-blue-500 transition-colors duration-1000" href="/about">About Us</Link>
          <Link className="cursor-pointer hover:text-blue-500 transition-colors duration-1000" href="/contact">Contact Us</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
