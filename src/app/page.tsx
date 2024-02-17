import { Hero } from "@/components";
import Image from "next/image";
import Contact from "./contact/page";
import About from "./about/page";
import Service from "./services/page";
export default function Home() {
  return (
      <main className="bg-[#F5F0F6] overflow-x-hidden min-w-screen">
        <Hero />
        <About />
	    <Service />
        <Contact />
      </main>
     );
}