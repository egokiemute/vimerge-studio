"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Working with Henry was a breeze. He's professional, responsive and takes great pride in the product he delivers.",
      name: "Dr Ramsey Nijem 1",
      position: "Director Kansas",
      imageSrc: "/assets/testimony.png",
    },
    {
      quote:
        "If you're looking to level up your website and take your brand to the next level, look no further.",
      name: "Dr Nijem 2",
      position: "University of Kansas",
      imageSrc: "/assets/testimony.png",
    },
    {
      quote:
        "Working with Henry was a breeze. He's professional, responsive and takes great pride in the product he delivers.",
      name: "Dr Ramsey Nijem 3",
      position: "Director of Sport Performance",
      imageSrc: "/assets/testimony.png",
    },
    // Add more testimonials here
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-10 mb-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-foreground">
          Praise
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Some nice words from nice people.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg relative">
          <p className="text-base md:text-lg text-gray-800 mb-4">
            {testimonials[currentSlide].quote}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[currentSlide].imageSrc}
                  alt={testimonials[currentSlide].name}
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>
            <div className="transform bg-transparent border-none focus:outline-none flex items-center gap-4">
              <button className="rounded-full bg-gray-100 p-2 " onClick={handlePreviousSlide}>
                <IconArrowLeft className="h-5 w-5 text-gray-400" />
              </button>
              <button className="rounded-full bg-gray-100 p-2 " onClick={handleNextSlide}>
                <IconArrowRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
