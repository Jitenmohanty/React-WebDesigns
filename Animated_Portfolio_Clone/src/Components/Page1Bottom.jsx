import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to(".banner img", {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div className="absolute bottom-0 w-[98%] flex justify-between items-end px-20 py-16">
      <div>
        <h1 className="text-[1.3vw]  text-white">
          BRAND DESIGN | WEBSITE DESIGN
        </h1>
        <h3 className="text-[1.3] font-[1px] text-gray-400">
          BESPOKE FREELANCE
        </h3>
      </div>
      <div className="flex flex-col gap-4 banner">
        <img
          className="h-[5vw] w-[5vw]"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
        />
        <img
          className="h-[5vw] w-[5vw]"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
