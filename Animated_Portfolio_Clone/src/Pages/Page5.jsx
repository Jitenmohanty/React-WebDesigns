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
        start: "top 90%",
        end: "top -270%",
        scrub: 2,
      },
    });
  });

  return (
    <div id='page5Div' className='bg-white text-center mt-20'>
        <h1 className='rotateText2 w-[96%] text-[32vw] leading-[30vw] font-[wolf4]'>HELPING</h1>
        <h1 className='rotateText2 w-[96%] text-[32vw] text-gray-400 leading-[30vw] font-[wolf4]'>MY</h1>
        <h1 className='rotateText2 w-[96%] text-[32vw] leading-[30vw] font-[wolf4]'>CLIENTS
        </h1>
        <h1 className='rotateText2 w-[96%] text-[32vw] leading-[30vw] font-[wolf4]'>TO ACHIEVE</h1>
        <h1 className='rotateText2 w-[96%] text-[32vw] text-gray-400 leading-[30vw] font-[wolf4]'>THEIR</h1>
        <h1 className='rotateText2 w-[96%] text-[32vw] leading-[30vw] font-[wolf4]'>DREAMS!</h1>
        <div className='h-screen p-3'>
        <div className='h-full relative w-full text-white overflow-hidden bg-black rounded-[2vw] shadow-lg flex justify-between shadow-gray-700'>
        <h1 className='absolute left-14 -bottom-[14vw] tracking-[1vw] text-[40vw] font-[wolf4] uppercase'>About</h1>
        <video autoPlay muted loop className='h-full w-full object-cover' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
            </div>
        </div>
    </div>
  )
}

export default Page5
