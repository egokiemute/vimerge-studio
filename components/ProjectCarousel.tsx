"use client";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "./ui/ImageSlider";
import SlideIndicator from "./SlideIndicator";

const ProjectCarousel = () => {
  const slideContents = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoSrc:
        "https://pentagram-production-uploads.s3.amazonaws.com/5232753e-8d68-40f7-b872-290fa58d5fd3/0Curtis_Preview_Homepage.mp4#t=0.1", // Video URL for the first slide (if any)
      heading: "The hero section slideshow nobody asked for",
      buttonText: "Join Now",
      index: 1
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoSrc:
        "https://pentagram-production-uploads.s3.amazonaws.com/6379d6a8-0a00-4986-b556-cb170ad32096/MW_NHM_Penta_Ripple.mp4#t=0.1", // Video URL for the second slide (if any)
      heading: "Second slide content",
      buttonText: "Join Now",
      index: 2
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoSrc:
        "https://pentagram-production-uploads.s3.amazonaws.com/fb4ed404-200e-4690-989a-333d01d3266e/01_Reddit_HomePage_LogoLockup_FullCard.mp4#t=0.1", // Video URL for the third slide (if any)
      heading: "Third slide content",
      buttonText: "Join Now",
      index: 3
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideContents.length);
    }, 50000);
    return () => clearInterval(interval);
  }, [slideContents.length]);

  return (
    <section className="mb-36 pt-20 relative">
      <div>
        <ImagesSlider
          className="h-[40rem] md:h-[60rem]"
          images={slideContents.map((content) => content.imgSrc)}
          videos={slideContents.map((content) => content.videoSrc)}
          contents={slideContents.map((content) => (
            <div key={content.index} className="z-50 flex flex-col justify-center items-center">
              <p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                {content.heading}
              </p>
              <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>{content.buttonText}</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </div>
          ))}
        />
      </div>
      <SlideIndicator
        currentIndex={currentIndex}
        totalSlides={slideContents.length}
      />
    </section>
  );
};

export default ProjectCarousel;
