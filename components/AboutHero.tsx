import React from "react";

const AboutHero = () => {
  return (
    <section className="container pb-20 pt-16 md:pt-28">
      <div className="max-w-7xl relative z-10 w-full flex flex-col gap-8 items-start justify-start">
        <h1 className="text-4xl md:text-7xl font-bold text-start">
          Our designs are
          <br />
          inspired by the Holy Spirit.
        </h1>
        <p className="font-normal text-2xl md:text-4xl text-neutral-700 max-w-7xl text-start mb-8">
          We&apos;re an agency founded on the belief that challenging core
          assumptions unlocks transformative solutions. A highly creative team
          that defy expectations, guided by focus and determination to do our
          best work.
        </p>
        <p className="font-normal text-2xl md:text-4xl text-neutral-700 max-w-7xl text-start">
          We believe in learning through doing, embracing the road less
          traveled, and continually striving to improve. Open communication and
          mindful listening guide our approach, ensuring we understand, adapt,
          and push forward in everything we do.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
