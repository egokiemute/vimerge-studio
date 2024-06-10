import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <section className="pb-20 pt-20 md:pt-36">
      <div className="">
        {/* <Spotlight
          className="-top-40 -left-20 md:-left-32 md:-top-10 h-screen"
          fill="black"
        />
        <Spotlight
          className="top-30 left-full h-[80vh] w-[50vw] rotate-90"
          fill="blue"
        /> */}
        {/* <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        /> */}
      </div>
      <div className="container">
        <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-muted to-primary bg-opacity-50">
            Design Studio <br /> for creative churchs.
          </h1>
          <p className="font-normal text-base md:text-lg text-neutral-500 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page.
          </p>
          <button className="px-12 py-4 text-lg rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Let&apos;s Build
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
