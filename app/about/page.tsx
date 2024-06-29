"use client";
import AboutHero from "@/components/AboutHero";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

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
      <section className="py-16 mb-20 bg-black">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-4 bg-[#005FEA] backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <h4 className="text-label font-semibold leading-none">
                      Emilson Kurtosie
                    </h4>
                    <span>CEO/Founder</span>
                    <Link href="/">
                      <FaLinkedin size={30} />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300 pb-2">
                    <li className="text-sub-title">ABOUT THE FOUNDER</li>
                    <li className="text-sm md:text-base pb-3">
                      Kunoritse Emilsson, the lead designer and founder of
                      Vimerge Studios from Delta State, Nigeria, has a passion
                      for God and design, specializing in brand identity and
                      T-shirt design. With over six years of experience, he
                      founded Vimerge Studios to help Christians and creatives
                      visually express their visions. As a Fiverr Level 2
                      seller, Emilsson has earned outstanding reviews for his
                      work, which focuses on crafting powerful and resonant
                      narratives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-4 bg-[#005FEA] backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <h4 className="text-label font-semibold leading-none">
                      Emilson Kurtosie
                    </h4>
                    <span>CEO/Founder</span>
                    <Link href="/">
                      <FaLinkedin size={30} />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300 pb-2">
                    <li className="text-sub-title">ABOUT THE FOUNDER</li>
                    <li className="text-sm md:text-base pb-3">
                      Kunoritse Emilsson, the lead designer and founder of
                      Vimerge Studios from Delta State, Nigeria, has a passion
                      for God and design, specializing in brand identity and
                      T-shirt design. With over six years of experience, he
                      founded Vimerge Studios to help Christians and creatives
                      visually express their visions. As a Fiverr Level 2
                      seller, Emilsson has earned outstanding reviews for his
                      work, which focuses on crafting powerful and resonant
                      narratives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                alt="Member"
                width={320}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute group bottom-2 overflow-hidden px-4 bg-[#005FEA] backdrop-blur-2xl w-full">
                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                  <div className="flex justify-between items-center">
                    <h4 className="text-label font-semibold leading-none">
                      Emilson Kurtosie
                    </h4>
                    <span>CEO/Founder</span>
                    <Link href="/">
                      <FaLinkedin size={30} />
                    </Link>
                  </div>
                  <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300 pb-2">
                    <li className="text-sub-title">ABOUT THE FOUNDER</li>
                    <li className="text-sm md:text-base pb-3">
                      Kunoritse Emilsson, the lead designer and founder of
                      Vimerge Studios from Delta State, Nigeria, has a passion
                      for God and design, specializing in brand identity and
                      T-shirt design. With over six years of experience, he
                      founded Vimerge Studios to help Christians and creatives
                      visually express their visions. As a Fiverr Level 2
                      seller, Emilsson has earned outstanding reviews for his
                      work, which focuses on crafting powerful and resonant
                      narratives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
