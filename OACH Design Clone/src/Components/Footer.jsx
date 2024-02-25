import React from "react";
import '../App.css'


const Footer = () => {
  return (
    <div className="w-full lg:min-h-screen px-10 lg:py-2 py-6 lg:pt-28  ">
      <div className="top flex lg:flex-row flex-col justify-between">
        <h1 className="text-[7vw] leading-[6vw] font-bold  uppercase">
          Eye-
          <br /> Opening
        </h1>
        <div className="middle">
          <h1 className="text-[7vw] tracking-tighter leading-[5vw] font-bold  uppercase">
            Presentations
          </h1>
          <div className="inner flex flex-col w-full">
            <div className="bottom mt-16 ml-2 flex flex-col  ">
              {[ "Instagram", "Behance", "Facebook", "Linkedin"].map(
                (item, index) => (
                  <h1
                  className="link"
                    key={item}
                  >
                    {item}
                  </h1>
                )
              )}
            </div>
            <div className="right flex justify-between">
              <div className="bottom mt-10 flex flex-col ml-2  ">
                {[
                  "202-1965 W 4th Ave",
                  "Vancouver, Canada",
                  "30 Chukarina St",
                  "Lviv, Ukraine",
                ].map((item, index) => (
                  <h1
                    className={`link
                      ${index === 2 && "mb-4"} `}
                    key={item}
                  >
                    {item}
                  </h1>
                ))}
              </div>
              <div className="bottom mt-10 ml-2 flex flex-col  ">
                {[
                  "Home",
                  "Services",
                  "Our work",
                  "About us",
                  "insights",
                  "Contact us",
                ].map((item, index) => (
                  <h1
                    className="link "
                    key={item}
                  >
                    {item}
                  </h1>
                ))}
              </div>
            </div>
            <div className="bottom mt-0 ml-2 flex flex-col  ">
              {[ "jitenmohantyaz@gmail.com"].map((item, index) => (
                <h1
                className="link"
                  key={item}
                >
                  {item}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom flex justify-between items-center mt-8 ">
        <h1 className="text-[3vw]">ochi</h1>
        <h2 className="text-gray-400">© ochi design<h3 className="link"> 2024. Legal Terms</h3></h2>
        <h2 className="text-gray-400 link">
          Website by{" "}
          <a href="https://portfolio-react-me.vercel.app/" target="_blank">
            @Jitu
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
