'use client'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React, { useEffect } from "react";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/linear.webp"
          width={200}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'fiverr-seller-widget-script-d91dae36-c002-41ff-81ad-6fcfded91d9c';
    script.src = 'https://widgets.fiverr.com/api/v1/seller/milsson?widget_id=d91dae36-c002-41ff-81ad-6fcfded91d9c';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div>About Us</div>
      <div
        itemScope
        itemType="http://schema.org/Person"
        className="fiverr-seller-widget"
      >
        <a
          href="https://www.fiverr.com/milsson"
          rel="nofollow"
          target="_blank"
          className="block"
        >
          <div
            className="fiverr-seller-content"
            id="fiverr-seller-widget-content-d91dae36-c002-41ff-81ad-6fcfded91d9c"
            itemProp="contentURL"
            style={{ display: 'none' }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: 'none' }}>
            <div itemProp="name">milsson</div>
            <div itemScope itemType="http://schema.org/Organization">
              <span itemProp="name">Fiverr</span>
            </div>
            <div itemProp="jobtitle">Seller</div>
            <div itemProp="description">
              Hi! My name is Milsson. I assure you, I&apos;m your best choice for
              remarkable graphics. I have completed several courses on graphic
              design, and the tools I use for my work. Simply put, I am
              deliberate about giving my clients the best, so I take out time to
              grow my skill. My strategy involves: • Getting acquainted with my
              client. • Understanding their needs, target audience, and
              competitors. • Creating a logo that meets client&apos;s requirements
              appeals to their target audience and stands out, remarkably, from
              the crowd. Feel free to contact me. Plus, I enjoy a good
              conversation. God bless!
            </div>
          </div>
        </a>
      </div>

      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </main>
  );
};

export default page;
