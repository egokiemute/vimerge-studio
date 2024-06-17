import React from "react";
import { Customers } from "./Customers";
import Link from "next/link";

const Hero = () => {
  const words = ["design", "studio", "beautiful", "modern"];
  return (
    <section className="container pb-20 pt-20 md:pt-28">
      <div className="max-w-8xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col gap-5 items-start justify-start">
        <div className="text-4xl md:text-8xl font-bold text-start">
          Design studio
          <br />
          for Creative Christians.
        </div>
        <p className="font-normal text-base md:text-xl text-neutral-500 max-w-4xl text-start">
          We are more than a design studio; we are storytellers of your visions.
          Inspired by Habbakuk 2:2, &apos;Write the vision and make it
          plain.&apos; Our designs transform your thoughts into impactful visual
          narratives.
        </p>
      </div>
      <div className="flex items-center gap-6 pt-8">
        <Link href="/contact">
          <button className="px-8 md:px-12 py-4 text-base md:text-lg bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Let&apos;s Build
          </button>
        </Link>
        <Customers />
      </div>
    </section>
  );
};

export default Hero;
