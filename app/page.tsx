'use client'
import Hero from "@/components/Hero";
// import PreviousWorks from "@/components/PreviousWorks";
import ProjectCarousel from "@/components/ProjectCarousel";
import Testimonial from "@/components/Testimonial";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
// import { Recent, getRecents } from "@/sanity/queries/recents";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  // const [recentData, setRecentData] = useState<Recent[]>([]);

  // useEffect(() => {
  //   const fetchRecentWorks = async() => {
  //     const recent = await getRecents();
  //     setRecentData(recent);
  //   };
  //   fetchRecentWorks();
  // }, []);
  // console.log(recentData);

  if (!loading) {
    return (
      <section className="container pb-16 pt-10 sm:pt-20 md:pt-28 animate-pulse">
        <div className="max-w-8xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col gap-5 items-start justify-start">
          <div className="h-12 sm:h-14 md:h-16 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 md:h-6 bg-gray-300 rounded w-2/3 mt-2"></div>
        </div>
        <div className="flex flex-col items-start md:flex-row md:items-center gap-6 pt-8">
          <div className="px-8 md:px-12 py-4 bg-gray-300 rounded w-32 md:w-40"></div>
          <div className="h-4 md:h-6 bg-gray-300 rounded w-24 md:w-32 mt-2 md:mt-0"></div>
        </div>
      </section>
    );
  }

  // // Transform worksData to fit the PreviousWorks component's expected props
  // const recentWorks = previousWork.slice(0, 3).map(work => ({
  //   title: work.title,
  //   imageUrl: work.mediaType === "image" || work.mediaType === "webp" ? work.imageUrl : undefined,
  //   mediaSrc: work.mediaType === "video" ? work.mediaSrc : undefined,
  //   mediaType: work.mediaType,
  //   span: true,
  //   slug: work.slug?.current
  // }));



  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <>
        <Hero />
      <div className="container max-w-8xl w-full">
        <FloatingNav navItems={navItems} />
      </div>
      <div className=" w-full">
        <ProjectCarousel />
      </div>
      {/* <PreviousWorks /> */}
{/*       <section className="py-10 mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Recent Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentData.map((work, index) => (
            <Link className="bg-white rounded-lg shadow-lg" key={index} href={`/works/${work.slug?.current || '/'}`}>
              <div
              key={index}
              className={`bg-white rounded-lg shadow-lg ${work.span ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              {work.mediaType === "image" && (
                <img
                  src={work.mediaSrc}
                  alt={work.title}
                  className="w-full h-auto object-cover mb-4 rounded"
                />
              )}
              {work.mediaType === "video" && (
                <video
                  src={work.mediaSrc}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto object-cover mb-4 rounded"
                >
                  <source src={work.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {work.mediaType === "webp" && (
                <img
                  src={work.mediaSrc}
                  alt={work.title}
                  className="w-full h-auto object-cover mb-4 rounded"
                />
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold">{work.title}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <div className="py-6 mt-10 text-center">
          <Link
            href="/works"
            className="text-2xl text-gray-400 hover:text-gray-300 duration-300 ease-in-out font-bold"
          >
            View All Works
          </Link>
        </div>
      </div>
    </section> */}

{/*       <Testimonial /> */}
    </>
  );
}

