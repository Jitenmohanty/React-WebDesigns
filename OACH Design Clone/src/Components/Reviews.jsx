import React, { useState } from "react";
import Data from "../assets/reviewData.json";

const Reviews = () => {
  const [visible, setVisisble] = useState(false);
  const [indexs, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    if (open) {
      setVisisble((prev) => !prev);
      setOpen(false);
    }
    setVisisble((prev) => !prev);
    setOpen(true);
    setIndex(index);
  };

  // console.log(Data)
  return (
    <div className="featured w-full pb-28 min-h-screen bg-black">
      <div className="header px-12 py-8 border-b-[1px] border-zinc-400">
        <h1 className="text-5xl">Client's reviews</h1>
      </div>
      <div className="reviwes w-full text-white">
        {Data.reviews.map((item, index) => (
          <div key={index} className="containers flex flex-col">
            <div
              className={`containers flex justify-between items-start border-b-2 ${
                visible && index === indexs
                  ? "border-b-black"
                  : "border-b-[1px]"
              }  px-10 py-4`}
            >
              <div className="flex w-[35%] justify-between">
                {" "}
                <div className="w-40">
                  <h2 className="">{item.cname}</h2>
                </div>
                {visible && (
                  <div
                    className={`w-40 ${indexs === index ? "flex" : "hidden"}`}
                  >
                    <h2>Services</h2>
                  </div>
                )}
              </div>
              <div className="flex w-1/2 justify-between">
                <div className=" w-40 flex justify-start items-start">
                  {" "}
                  <h2>{item.name}</h2>
                </div>
                <div
                  className="border-b-2 hover:text-green-100"
                  onClick={() => handleClick(index)}
                >
                  {" "}
                  <button>Read</button>
                </div>
              </div>
            </div>
            {visible && (
              <div
                className={`innerElem w-full ${
                  indexs === index
                    ? "flex border-b-2 transition-[2s all ease-in-out]"
                    : "hidden"
                } px-10 py-6 min-h-[30vh]  mt-12 justify-center gap-80`}
              >
                <div className=" flex flex-col ">
                  {item.services.map((elem) => {
                    return (
                      <h1 className="px-2 w-fit font-semibold py-1 border-zinc-500 border-2 rounded-full text-black bg-white uppercase text-sm text-center mt-4">
                        {elem}
                      </h1>
                    );
                  })}
                </div>
                <div className="w-[30%]">
                  <img
                    className="h-20 w-20 mb-5 rounded-lg"
                    src={item.img}
                    alt=""
                  />
                  <h2>{item.desc}</h2>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
        <div className="cards px-10 py-20 flex gap-5">
            <div className="w-1/2 bg-[#004D43] h-96 rounded-lg flex justify-center items-center relative">
                  <h1 className="text-7xl text-[#CDEA68]">ochi</h1>
                  <div className="absolute left-10 bottom-6 border-[#CDEA68] border-2 px-3 text-[#CDEA68] py-1 text-sm rounded-full">&copy;2022-2024</div>
            </div>
            <div className="w-1/2  h-96 flex gap-4  rounded-lg">
                  <div className="w-1/2 h-96 bg-[#51838e] rounded-lg flex justify-center items-center  relative">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                     <div className="absolute left-10 bottom-6 border-[#CDEA68] border-2 px-3 text-[#CDEA68] py-1 text-sm rounded-full">&copy;2022-2024</div>
                  </div>
                  <div className="w-1/2 h-96 bg-[#51838e] rounded-lg flex justify-center items-center relative">
                    <img className="bg-none mix-blend-screen rounded-full h-20 w-20"  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""/>
                     <div className="absolute left-10 bottom-6 border-[#CDEA68] border-2 px-3 text-[#CDEA68] py-1 text-sm rounded-full">&copy;2022-2024</div>
                  </div>
            </div>
        </div>
    </div>
  );
};

export default Reviews;
