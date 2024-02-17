"use client";
import React from "react";
import Link from "next/link";


import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className="min-w-screen flex flex-col justify-center  h-[16rem] md:h-[14rem] sm:pt-5 sm:py-4 bg-red-600 text-white text-[1.2rem] px-4 py-2">
       
        <div className="min-w-screen flex justify-between overflow-x-hidden  sm:justify-around  ">
          <div>
            <label>Resources</label>
            <div className="links text-[0.8rem] ml-1">
              <ul>
                <li className="my-1">
                  <Link
                    href="/"
                    className="hover:text-black  hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className=" hover:text-black  hover:underline"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div> 
            <label>Support</label>
            <div className="text-[0.8rem]">
              <ul>
                <li className="my-1 hover:text-black hover:underline ">Privacy</li>
                <li className="my-1 hover:text-black hover:underline">Help &amp; FAQ</li>
                <li className="my-1 hover:text-black hover:underline">Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div>
            <label htmlFor="" className="">Join Us</label>
            <div className="text-[0.8em]">
              <ul>
                <li className="my-1 hover:text-black hover:underline">
                  <Link
                    href="https://github.com/Abhishekh669"
                    className="hover:text-black hover:underline"
                  >
                    Git Hub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="min-w-screen my-3 ">
          <div className="sm:w-[80%] md:[95%] mx-auto bg-white h-[2px] "></div>
          <div className="text-[0.79rem] lg:text-[1rem] sm:w-full min-w-screen  flex justify-between items-center mt-4  px-4 overflow-x-hidden">
            <span className="hover:text-black cursor-pointer">Copyright&copy;Abhihsekh_Nepali</span>
            <div className="flex text-[1.2rem]  lg:text-[1.4rem] ">
              <Link
                className="mx-[10px]  text-white hover:text-black  "
                href="https://www.facebook.com/abhishekh.nepali.1"
              >
                <FaFacebook />
              </Link>
              <Link
                className="mx-[10px]  text-white hover:text-black "
                href="https://www.instagram.com/nepaliabhishekh/"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                className="mx-[10px]  text-white hover:text-black "
                href="https://twitter.com/Abhishekh669"
              >
                <AiFillTwitterCircle />
              </Link>
              <Link
                className="mx-[10px] text-white hover:text-black "
                href="https://github.com/Abhishekh669"
              >
                <IoLogoGithub />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

