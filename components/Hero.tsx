"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HeroType, getHeroSection } from "@/sanity/queries/hero";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { default as ImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { Recent, getRecents } from "@/sanity/queries/recents";

const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const componentsTest: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl mb-6">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-4xl mb-6 leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-3xl mb-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl mb-6">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-white mb-6 border-l-4 border-opacity-60 bg-white/10 p-6 w-full">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="sm:h-[45vh] aspect-auto w-full h-[33vh]  mb-6">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          width={320}
          height={450}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-400 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className=" font-bold underline text-yellow-300"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroType | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      const data = await getHeroSection();
      setHeroData(data);
    };

    fetchHeroData();
  }, []);
  console.log(heroData);

  if (!heroData) {
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
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-20 bg-gray-300 rounded-full"></div>
          <div className="h-20 bg-gray-300 rounded-full"></div>
        </div>
        {/* <div className="h-4 md:h-6 bg-gray-300 rounded w-1/4 mt-4"></div> */}
      </section>
    );
  }
  return (
    <section className="container pb-16 pt-10 sm:pt-20 md:pt-28">
      <div className="max-w-8xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col gap-5 items-start justify-start">
        <div className="text-5xl sm:text-6xl md:text-8xl font-bold text-start w-full">
          {heroData?.titleOne} <br className="hidden sm:inline-block" />{" "}
          {heroData?.titleTwo}
        </div>
        <p className="font-normal text-base md:text-xl text-neutral-500 max-w-4xl text-start">
          <PortableText value={heroData?.body} components={componentsTest} />
        </p>
      </div>
      <div className="flex flex-col items-start md:flex-row md:items-center gap-6 pt-8">
        <Link href="/contact">
          <button className="px-8 md:px-12 py-4 text-base md:text-lg bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            {heroData?.btnText}
          </button>
        </Link>
        <div className="flex flex-row items-centerbg-black-300">
          {(heroData?.gallery || []).map((item, index) => (
            <div className="-mr-4 relative group" key={index}>
              <img
                height={100}
                width={100}
                src={item?.asset?.url}
                alt={item.alt}
                className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
