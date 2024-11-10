import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page5 = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateText2", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText2",
        // markers: true,
        start: "top 60%",
        end: "top -270%",
        scrub: 2,
      },
    });
  });

  return (
    <div className='bg-white text-center mt-20'>
        <h1 className='rotateText2 text-[36vw] leading-[30vw] font-[wolf4]'>HELPING</h1>
        <h1 className='rotateText2 text-[36vw] text-gray-400 leading-[30vw] font-[wolf4]'>MY</h1>
        <h1 className='rotateText2 text-[36vw] leading-[30vw] font-[wolf4]'>CLIENTS
        </h1>
        <h1 className='rotateText2 text-[36vw] leading-[30vw] font-[wolf4]'>TO ACHIEVE</h1>
        <h1 className='rotateText2 text-[36vw] text-gray-400 leading-[30vw] font-[wolf4]'>THEIR</h1>
        <h1 className='rotateText2 text-[36vw] leading-[30vw] font-[wolf4]'>DREAMS!</h1>
    </div>
  )
}

export default Page5
