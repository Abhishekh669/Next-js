import React from "react";
import { Button } from "@/components";
import Image from "next/image";

function About() {
  return (
   <div className="my-2 md:px-8 bg-[#F5F0F6]">
      <p className="w-full mx-2 mt-[0.9rem] text-[1.5rem]  md:text-[2rem] font-semibold text-red-600 px-[0.2rem] md:px-6">
        About Us
      </p>
     <div className="min-w-screen   my-4  px-4 md:flex md:justify-between md:px-4">
      <div >
        <p className="text-[1.5rem] ml-2">About us</p>
        <div className="px-2 w-[90%]   ">
          <p className="text-justify md:text-[1.2rem] md:w-[90%] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            nesciunt eum officia ut aut, nisi aperiam optio maiores iste,
           
          </p>
        </div>
        <div className="my-1">
          <Button className=" my-2 md:w-auto md:py-1 md:ml-2 mx-auto">Services</Button>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-2 md:gap-4 my-4 ">
        <div className="photo1  ">
          <Image width={200} height={200}  src="/bootcamp.jpg" alt=""className="my-2 mx-auto" />
          <p className="text-justify mx-2 w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            amet.
          </p>
        </div>
        <div className="photo2 ">
          <Image width={200} height={200}  src="/bootcamp.jpg" alt=""className="my-2 mx-auto"/>
          <p className="text-justify mx-2 w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            amet.
          </p>
        </div>
        <div className="photo3 ">
          <Image width={200} height={200} src="/bootcamp.jpg" alt=""className="my-2 mx-auto" />
          <p className="text-justify mx-2 w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            amet.
          </p>
        </div>
        <div className="photo4 ">
          {" "}
          <Image width={200} height={200} src="/bootcamp.jpg" alt="" className="my-2 mx-auto"/>
        
          <p className="text-justify mx-2 w-[80%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            amet.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default About;

