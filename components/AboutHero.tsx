import React from "react";

const AboutHero = () => {
  return (
    <section className="container pb-20 pt-16 md:pt-28">
      <div className="max-w-7xl relative z-10 w-full flex flex-col gap-8 items-start justify-start">
        <h1 className="text-3xl md:text-6xl font-bold text-start">
          About Vimerge
        </h1>
        <p className="font-normal text-xl md:text-3xl text-neutral-700 max-w-5xl text-start mb-8">
          At Vimerge, your visions come to life. Our name, derived from
          <b> visions</b> and <b>emerge</b>, reflects our commitment to
          transforming your ideas into impactful realities. Inspired by the
          prophetic words of Habakkuk 2:2:{" "}
          <b>"Write the vision and make it plain,"</b> we are not just a design
          studio we are storytellers.
        </p>
        <p className="font-normal text-xl md:text-3xl text-neutral-700 max-w-5xl text-start">
          Each stroke of our designs transforms thoughts into tangible, visual
          narratives, ensuring your message is seen and profoundly understood.
          Here, your visions don&apos;t just exist; they emerge with purpose and
          impact.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12 items-center">
        <div className="col-span-1 md:col-span-2">
          <img
            src="/banner.png"
            className="w-full h-auto"
            alt="Vimerge banner"
          />
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col md:block space-y-4 md:space-y-0 h-60">
          {/* <img
            src="/box-1.png"
            className="w-full h-auto"
            alt="Vimerge banner"
          /> */}
          <div className="w-80 h-80">
          <img
            src="/box-2.png"
            className="w-full h-full object-cover"
            alt="Vimerge banner"
          />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-40 px-10">
        <div className="text-center -mt-10">
          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <p className="text-4xl">
            To be a beacon of creativity and faith, crafting designs that
            inspire, uplift, and communicate with clarity and purpose.
          </p>
        </div>
        <div className="-mb-40 text-center">
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p className="text-4xl">
            To transform your visions into impactful visual narratives through
            innovative, faith-centric design, while upholding the highest
            standards of excellence, clarity, and collaboration. .
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-20 w-full">
        <h3 className="text-2xl font-semibold mb-4">The 3 C's of Vimerge</h3>
        <div className="flex flex-col gap-3 w-full max-w-5xl">
          <div className="bg-[#005FEA] flex flex-col items-start md:flex-row gap-2 md:items-center justify-between p-4 rounded-3xl">
            <div>
              <p className="text-3xl font-medium">Clarity</p>
            </div>
            <div className=" text-white font-bold text-xl px-6 py-3">
              Write the Vision
            </div>
          </div>
          <div className="bg-[#005FEA] flex flex-col items-start md:flex-row gap-2 md:items-center justify-between p-4 rounded-3xl">
            <div>
              <p className="text-3xl font-medium">Clarity</p>
            </div>
            <div className=" text-white font-bold text-xl px-6 py-3">
              Write the Vision
            </div>
          </div>
          <div className="bg-[#005FEA] flex flex-col items-start md:flex-row gap-2 md:items-center justify-between p-4 rounded-3xl">
            <div>
              <p className="text-3xl font-medium">Clarity</p>
            </div>
            <div className=" text-white font-bold text-xl px-6 py-3">
              Write the Vision
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
