import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const SecondEye = () => {

    const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;


      let deltaX = clientX - window.innerWidth / 2;
      let deltaY = clientY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) *( 180 / Math.PI);
      setRotate(angle-180);
    });
  });

  return (
    <div  className="relative font-sans lg:py-44 py-10 lg:min-h-screen rounded-tl-3xl rounded-tr-3xl   w-full bg-[#CDEA68] gap-7 text-black flex justify-center items-center flex-col">
        <div className="  flex justify-center items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-80%] h-1/2 w-1/2 gap-8">
          <div className="h-[18vw] lg:h-[11vw] w-[18vw] lg:w-[11vw] rounded-full bg-white flex justify-center items-center">
            <div className="relative  h-[10vw] w-[10vw] lg:h-[7vw] lg:w-[7vw] bg-black rounded-full">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="role absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-3">
                <div className="small  h-[2vw] w-[2vw] lg:h-[1vw] lg:w-[1vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="h-[18vw] lg:h-[11vw] w-[18vw] lg:w-[11vw] rounded-full bg-white flex justify-center items-center">
          <div className="relative  h-[10vw] w-[10vw] lg:h-[7vw] lg:w-[7vw] bg-black rounded-full">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="role absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-3">
                <div className="small  h-[2vw] w-[2vw] lg:h-[1vw] lg:w-[1vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      <div  className="main  font-bold lg:tracking-[-10px] tracking-normal leading-[10vw] flex justify-center items-center flex-col uppercase">
        <h1 className="text-5xl lg:text-[12vw]">Ready</h1>
        <h1 className="text-5xl lg:text-[12vw]">To Start</h1>
        <h1 className="text-5xl lg:text-[12vw]">
          The Project <b className="text-[14vw]">?</b>
        </h1>
        
      </div>
      <div className="inner flex justify-center items-center px-4 py-4 text-white rounded-full gap-8 uppercase text-xl lg:text-[1vw] bg-black ">
          <h1 className="">view all case studies</h1>
          <h1 className="rotate-[-140deg]">
            {" "}
            <FaArrowDown />
          </h1>
        </div>
        <h1>OR</h1>
      <div className="inner flex justify-center items-center px-4 py-4 text-white rounded-full gap-8 uppercase text-xl lg:text-[1vw] bg-black ">
          <h1 className="">view all case studies</h1>
          <h1 className="rotate-[-140deg]">
            {" "}
            <FaArrowDown />
          </h1>
        </div>
      
    </div>
  );
};

export default SecondEye;
