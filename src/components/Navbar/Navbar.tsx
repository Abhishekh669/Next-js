"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

function Navbar() {
  const [icon, setIcon] = useState<boolean>(false)
  const pathName = usePathname();
  
  interface NavItem {
    name: string;
    path: string;
  }

  const navItems: NavItem[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Services",
      path: "/services",
    },
  ];

  const toggleBar = () => {
    setIcon(!icon);
    document.body.style.overflowY = icon ? 'auto' : 'hidden';
  }

  return (
    <nav className="md:pt-10 bg-slate-400 px-2 py-2 relative">
      <div className={`min-w-screen min-h-screen w-[75%] bg-[#C7E8F3] md:hidden absolute top-0 left-0 transition-transform duration-1000 ease-in-out ${icon ? "translate-x-0" : "-translate-x-full"}`}>
        <ul className="text-center px-20">
          {navItems.map((navItem: NavItem) => (
            <li key={navItem.name} className='text-[20px] my-20'>
              <Link href={navItem.path} className={clsx('hover:text-pink-600 peer', {'text-orange-600': pathName === navItem.path})}>{navItem.name}</Link>
              <div className="w-full mt-4 peer-hover:bg-pink-600 h-[1px] bg-white"></div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between">
        <div className="md:mx-10 my-5 md:my-0">
          <Link href='/' className="text-[30px]">LogoHere</Link>
        </div>
        <div className="mx-5">
          <ul className="hidden md:flex">
            {navItems.map((navItem: NavItem) => (
              <li key={navItem.name} className='lg:mx-4 mx-2 inline-block text-[20px]'>
                <Link href={navItem.path} className={clsx("relative after:content-[''] after:h-[2px] after:w-[0%] after:absolute after:bg-black after:bottom-0 after:left-0 after:duration-300 after:ease-linear hover:after:w-[100%]", {'text-orange-600': pathName === navItem.path})}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
          <button className="text-[2.8rem] mt-4 md:hidden text-[#27AE60]" onClick={toggleBar}>
            {icon ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
