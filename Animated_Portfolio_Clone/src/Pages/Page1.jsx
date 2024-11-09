import React, { useRef, useState } from "react";
import TilledText from "../Components/TilledText";
import Page1Bottom from "../Components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page1 = () => {
  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);
  const tiltRef = useRef(null);

  const mouseMoving = (e) => {
    setXval(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        30
    );
    setYval(
      -(  e.clientY - tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
   
  };

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform: tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3,
      ease:'elastic.out(1,0.3)'
    })
  },[xVal,yVal])

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen p-4 relative bg-white"
    >
          <div
            id="page1-in"
            className="bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1862,h_829,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] h-full w-full shadow-2xl rounded-[2rem] shadow-gray-500 bg-cover bg-no-repeat"
          >
                <img
                  className="pl-16 py-10 h-36 w-36 object-contain"
                  src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
                  alt="Logo"
                />
                <TilledText abc={tiltRef} />
                <Page1Bottom />
          </div>
    </div>
  );
};

export default Page1;
