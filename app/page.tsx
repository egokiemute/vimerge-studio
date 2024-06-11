import { BentoGridSecondDemo } from "@/components/BentoGridDemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PreviousWorks from "@/components/PreviousWorks";
import ProjectCarousel from "@/components/ProjectCarousel";
import Testimonial from "@/components/Testimonial";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {
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
      <div className="container max-w-8xl w-full">
        {/* <Header /> */}
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <div className=" w-full">
        <ProjectCarousel />
      </div>
      <PreviousWorks />
      {/* <BentoGridSecondDemo /> */}
      <Testimonial />
      {/* <Footer /> */}
    </>
  );
}

