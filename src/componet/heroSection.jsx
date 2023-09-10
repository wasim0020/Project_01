import React from "react";
import flip from "../assets/flipkart.png";
import amz from "../assets/amazon.png";
import Sho from "../assets/shoe_image.png";

function heroSection() {
  return (
    <>
     <div className="w-[1000px] h-[613px] mx-auto my-[100px] flex">
      <div>
        <h1 className=" w-[595px] h-[306px] text-[108px] font-Poppins leading-[102px] font-extrabold		">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p
          className="w-[404px] my-[30px] h-[91px] text-[16px] font-Poppins leading-[24px] font-semibold	text-background: #5A5959;
"
        >
          {" "}
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <button className="bg-[#D01C28] w-[150px] h-[41px] px-[16px] py-[6px] text-white font-bold">
          Shop Now
        </button>
        <button className=" mb-[30px] w-[150px] h-[41px] px-[16px] py-[6px] border-[1px] border-black font-bold opacity-60 ml-[26px]">
          Category
        </button>
        <p >Also Available On</p>
        <span className="flex mt-[15px]" >
        
        <img className="w-[32px] h-[32px] mr-[26px]" src={flip} />
        <img className="w-[32px] h-[32px]" src={amz} />
        </span>
        </div>
      <div className=" my-auto ">
        <img  className="w-[530px] h-[487.06px] "  src={Sho} />
      </div>
      </div>
    </>
  );
}

export default heroSection;
