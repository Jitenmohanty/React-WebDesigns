import React from "react";
import "remixicon/fonts/remixicon.css";
const Header = () => {
  return (
    <div className="absolute  w-full z-10 px-10 py-16 flex items-center justify-end">
      <button className=" rounded-full border-[.30rem]  border-white text-white px-11 py-[0.55rem] bg-black hover:bg-gray-400">
        Hire Me
      </button>
      <i className="ri-more-2-fill text-4xl ml-3 text-gray-300"></i>
    </div>
  );
};

export default Header;
