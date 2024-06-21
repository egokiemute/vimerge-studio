import WorkHero from "@/components/WorkHero";
import Works from "@/components/Works";
import { Post, getPosts } from "@/sanity/queries/posts";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const worksData: Post[] = await getPosts();
  console.log(worksData);
  return (
    <main className="">
      <WorkHero />
      {/* <Works works={worksData} /> */}
      <section className="py-16 mb-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {worksData.map((work, index) => (
              <Link className="bg-white rounded-lg shadow-lg" key={index} href={`/works/${work.slug?.current || '/'}`}>
                  {work.mediaType === "image" && (
                    <img
                      src={work.imageUrl}
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
                      src={work.imageUrl}
                      alt={work.title}
                      className="w-full h-auto object-cover mb-4 rounded"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {work.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{work.author}</p>
                    <div className="flex flex-wrap gap-2">
                      {(work.categories || []).map((category, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            work.publishedAt
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  </div>
              </Link>
            ))}
          </div>
          <Link className="mt-6" href="/contact">
            <button className="px-8 md:px-12 py-2 text-base md:text-lg rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Let&apos;s Build
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
