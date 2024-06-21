"use client";
import AboutHero from "@/components/AboutHero";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React, { useEffect } from "react";

const content = [
  {
    title: "Challenge Core Assumptions",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-medium text-lg">
        Challenge Core Assumptions
      </div>
    ),
  },
  {
    title: "Learning Through Doing",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      // <div className="h-full w-full  flex items-center justify-center text-white">
      //   <Image
      //     src="/assets/linear.webp"
      //     width={200}
      //     height={300}
      //     className="h-full w-full object-cover"
      //     alt="linear board demo"
      //   />
      // </div>
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--yellow-500))] flex items-center justify-center text-white font-medium text-lg">
        Learning Through Doing
      </div>
    ),
  },
  {
    title: "Focus and Determination",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white font-medium text-lg">
        Focus and Determination
      </div>
    ),
  },
  {
    title: "Listen Smart",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-medium text-lg">
        Listen Smart
      </div>
    ),
  },
];

const page = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <AboutHero />
      <section className="py-16 mb-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Founder"
                className="w-full h-auto object-cover mb-4 rounded"
              />
              <div className=" p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Emilson Kurtosie
                </h3>
                <p className="mb-4">CEO / Design Lead</p>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  non recusandae deserunt laudantium possimus soluta nobis!
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Founder"
                className="w-full h-auto object-cover mb-4 rounded"
              />
              <div className=" p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Matthew Okiemute
                </h3>
                <p className="mb-4">Developer Lead</p>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  non recusandae deserunt laudantium possimus soluta nobis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-10 max-w-7xl pb-32">
        <h3 className="font-normal text-3xl md:text-4xl text-neutral-900 max-w-7xl text-center pb-6">
          Our Values
        </h3>
        <StickyScroll content={content} />
      </div>
    </main>
  );
};

export default page;
