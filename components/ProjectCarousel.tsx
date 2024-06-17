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
        "/curtis-video.mp4", // Video URL for the first slide (if any)
      heading: "The hero section slideshow nobody asked for",
      buttonText: "Join Now",
      index: 1
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoSrc:
        "/reddit-video.mp4", // Video URL for the second slide (if any)
      heading: "Second slide content",
      buttonText: "Join Now",
      index: 2
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoSrc:
        "/instream-video.mp4", // Video URL for the third slide (if any)
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
    <section className="mb-36 pt-16 relative">
      <div>
        <ImagesSlider
          className="h-[40rem] md:h-[60rem]"
          images={slideContents.map((content) => content.imgSrc)}
          videos={slideContents.map((content) => content.videoSrc)}
          contents={slideContents.map((content) => (
            <div key={content.index} className="z-50 flex flex-col justify-center items-start">
              <p className="font-extrabold text-lg md:text-2xl text-start bg-clip-text text-white">
                {content.heading}
              </p>
              <p className="py-2 text-white text-lg font-bold text-start rounded-full relative">
                <span>{content.buttonText}</span>
              </p>
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
