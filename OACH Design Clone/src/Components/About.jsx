import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".002" className="min-h-screen w-full bg-[#CDEA68] text-black  rounded-tl-3xl rounded-tr-3xl">
      <div className="htag  border-b-[0.5px] border-zinc-500 px-5 py-10  lg:px-12 lg:py-20">
        <h1 className="text-3xl lg:text-[3.5vw] leading-[10vw] lg:leading-[4vw] w-[85%]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and{" "}
          <u>hire great peo­ple</u>.
        </h1>
      </div>
      <div className="middle lg:px-12 px-5 py-6 flex lg:flex-row flex-col w-full justify-around border-b-[0.5px] border-zinc-500 pb-16 gap-4 text-xl">
        <h1 className="lg:w-[30%] w-full">What you can expect:</h1>
        <div className="middleMid flex lg:w-[22%] w-full gap-4 lg:gap-10 flex-col justify-start lg:text-base">
          <h1 className="">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </h1>
          <h1>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h1>
        </div>
        <div className="bottom lg:mt-24 mt-6 text-2xl">
          {["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <h1
                className={`${index === 0 && "mb-4 no-underline"} underline`}
                key={item}
              >
                {item}
              </h1>
            )
          )}
        </div>
      </div>
      <div className="bottom lg:px-12 px-5 py-6 flex flex-col gap-6 lg:flex-row justify-between  pb-16">
        <div className="left">
          <h1 className="lg:text-[4vw] text-3xl tracking-[-0.2vw]">Our approach:</h1>
          <div className="btn pl-4 py-4 pr-1 mt-3 lg:mt-6 bg-black rounded-full text-white flex justify-around w-44 items-center">
            <h1 className="">
              READ MORE
            </h1>
           <h1 className="rotate-180"> <FaArrowDown/></h1>
          </div>
        </div>
        <img
          className="rounded-xl"
          src="	https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
