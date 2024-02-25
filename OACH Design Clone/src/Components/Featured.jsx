import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const hoverStart = (index) => {
    cards[index].start({ y: "0" },);
  };
  const hoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="featured w-full pb-28 min-h-screen bg-black">
      <div className="header lg:px-12 px-6 py-8 border-b-[1px] border-zinc-400">
        <h1 className="text-5xl"> Featured projects</h1>
      </div>
      <div className="main lg:px-12 px-6">
        <div className="heading mt-16 mb-6 flex  justify-between">
          <div className="innerHead flex  lg:w-1/2 w-full justify-start items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-white mt-2"></div>
            <h2 className="uppercase lg:text-base text-[8vw]">Fyde</h2>
          </div>
          
        </div>
        <div className="container flex lg:flex-row  flex-col gap-10 w-full ">
          <motion.div
            onHoverStart={() => hoverStart(0)}
            onHoverEnd={() => hoverEnd(0)}
            className="inner w-1/2 rounded-lg relative"
          >
            <h1 className="absolute overflow-hidden z-10 left-full -translate-x-1/2 top-[30%] text-8xl font-bold flex text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="img bg-cover lg:w-full w-[200%]  rounded-lg overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="capsule w-full flex gap-10  text-white mt-6">
              {["audit", "copywriting", "sales dest", "slides design"].map(
                (item, index) => {
                  return (
                    <h3
                      key={item}
                      className="rounded-3xl uppercase border-[1px] py-1 text-gray-400 border-gray-400  text-sm  px-4 "
                    >
                      {item}
                    </h3>
                  );
                }
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => hoverStart(1)}
            onHoverEnd={() => hoverEnd(1)}
            className="inner w-1/2  rounded-lg relative  "
          >
            <div className="innerHead flex w-full justify-start items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-white mt-2"></div>
            <h2 className="uppercase lg:text-base text-[8vw] ">Vise</h2>
          </div>
            <h1 className="absolute overflow-hidden  z-10 left-0 -translate-x-1/2 top-[30%] text-8xl font-bold flex text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="img rounded-lg lg:w-full w-[200%] overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="capsule w-full flex gap-10  text-white mt-6">
              {["agebcy", "company Presentation"].map((item, index) => {
                return (
                  <h3
                    key={item}
                    className="rounded-3xl uppercase border-[1px] py-1 text-gray-400 border-gray-400  text-sm  px-4 "
                  >
                    {item}
                  </h3>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="btn w-full mt-20  bg-black rounded-full font-bold text-black flex justify-center items-center">
        <div className="inner border-2 flex justify-center items-center px-5 py-3 rounded-full gap-8 uppercase bg-white">
          <h1 className="">view all case studies</h1>
          <h1 className="rotate-[-140deg]">
            {" "}
            <FaArrowDown />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
