import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className="w-full- h-screen bg-black pt-1">
      <div className="makers mt-28 lg:px-12 px-6 lg:pb-2 pb-40">
        <div className=" lg:leading-[5.8vw]  ">
          {["We Create", "Eye Opening", "Presentations"].map((elem, index) => (
            <div key={elem} className="flex">
              {index === 1 && <motion.div  initial={{width:0}} animate={{width:"7vw"}}
              transition={{ease:[0.76,0,0.24,1], duration:1}} className="w-28 rounded-md h-16 bg-red-400 mt-[1vw] "></motion.div>}
              <h1
                key={elem}
                className="flex lg:text-[6.5vw] text-6xl tracking-[-.4vw]  uppercase font-bold"
              >
                {elem}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom border-t-[1px]  border-zinc-500 lg:mt-28 mt-10 flex lg:flex-row flex-col justify-between lg:items-center items-start lg:px-12 px-6 ">
        {[
          "For Public and private companies",
          "From the first Pitch to IPO",
        ].map((item, index) => (
          <h1 key={item} className="mt-2">
            {item}
          </h1>
        ))}
        <div className="inner flex mt-4 gap-2">
          <h1 className=" border-2 flex items-center justify-center rounded-full uppercase px-2 ">
            Start The Project
          </h1>
          <h1 className="h-10 w-10 border-2 rounded-full flex items-center justify-center">
            {" "}
            <span className="rotate-[-145deg]">
              <FaArrowDown />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
