import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import { Button } from "..";

function Hero() {
  return (
    <>
      <div className="min-h-screen px-2 ">
        {/* <Navbar /> */}
        <div className="w-full min-h-screen middle-part flex flex-col md:flex-row md:jutify-between h-full gap-10 px-1">
          <div className="w-full md:w-[60%] pt-10 flex flex-col justify-center items-start gap-7 px-1 md:px-20  ">
            <p className=" w-1/2  mx-auto md:w-full md:mx-0 text-[1.425rem] text-center md:text-[2rem]  md:text-justify lg:text-[3.546rem] ">
             Hey, Welcome to my website, there you go a new world.
            </p>
            {/* <p className=" md:hidden text-[1.425rem] text-center w-full md:text-justify md:text-[3.546rem] ">
             <p>Hey, Welcome to my website, there you go a new world.</p>
            </p> */}
           <div className="  w-full md:w-auto  h-[4rem] flex justify-center md:inline-block">
           <Button className="bg-red-500 w-[8rem] mx-auto mt-4  hover:bg-transparent hover:border-2 hover:border-red-600 hover:text-black md:mx-0" >
              <span>Click Me</span>
            </Button>
           </div>
          </div>
          <div className="h-full w-[40%] flex items-center justify-center">
            <div className="hidden md:h-[40rem] md:w-[25rem]  md:min-h-screen md:flex items-center justify-center">
              <Image
                width={600}
                height={1000}
                src="/bootcamp.jpg"
                alt="photo xa hoi hjr"
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex w-full   md:min-h-screen md:hidden items-center justify-center">
            <Image
              height={3000}
              width={3000}
              src="/bootcamp.jpg"
              alt="photo xa hoi hjr"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-7 md:gap-4 gap-8 mt-8 font-semibold text-[1rem] md:text-[2rem] py-2 justify-evenly ">
          <div>Adventure</div>
          <div>Skills</div>
          <div>Projects</div>
          
        </div>
      </div>
    </>
  );
}

export default Hero;
