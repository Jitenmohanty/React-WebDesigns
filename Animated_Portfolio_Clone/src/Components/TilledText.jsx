import React from "react";


const TilledText = (props) => {


  return (
    <div ref={props.abc} id="tiltDiv" className="mt-28 px-10 ml-6">
      <h1 className="text-[4.2vw] font-[wolf1] uppercase leading-[4.5vw] text-white">
        {" "}
        I AM <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[8.2vw] font-[wolf1] uppercase leading-[7.5vw] text-white">DESIGNER</h1>
      <h1 className="text-[4.2vw] font-[wolf1] uppercase leading-[4.5vw] text-white">TO HIRE</h1>
    </div>
  );
};

export default TilledText;
