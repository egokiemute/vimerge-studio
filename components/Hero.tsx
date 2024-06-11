import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["design", "studio", "beautiful", "modern"];
  return (
    <section className="pb-20 pt-20 md:pt-36">
      <div className="container">
        <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col gap-5 items-start justify-start">
          <div className="text-4xl md:text-8xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-muted to-primary bg-opacity-50">
            Christian
            <FlipWords words={words} /> <br />
            for Creative Christians.
          </div>
          {/* <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-muted to-primary bg-opacity-50">
          Christian design studio <br />for Creative Christians.
          </h1> */}
          <p className="font-normal text-base md:text-xl text-neutral-500 max-w-4xl text-start">
            We are more than a design studio; we are storytellers of your
            visions. Inspired by Habbakuk 2:2, &apos;Write the vision and make
            it plain.&apos; Our designs transform your thoughts into impactful
            visual narratives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
