import { groq } from "next-sanity";
import { client } from "../lib/client";

export type category = {
  title: string;
};

export type Post = {
  title?: string;
  description?: string;
  slug?: {
    current: string;
  };
  author: string;
  comingSoon: string;
  imageUrl: string;
  mediaSrc: string;
  publishedAt: string;
  mediaType: string;
  videoUrl?: string; // Add videoUrl field
  categories?: category[];
};

const getPostsQuery = groq`*[_type == "post"]{
  title,
  description,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  "mediaSrc": mediaSrc.asset->url,
  "categories": categories[]->{title},
  mediaType,
  publishedAt,
  body
}`;

export async function getPosts() {
  return await client.fetch(getPostsQuery, {});
}

const getPostDetailQuery = groq`*[_type == "post"][slug.current == $slug][0]{
  title,
  description,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  "categories": categories[]->{title},
  "mediaSrc": mediaSrc.asset->url, // Add videoUrl to the query
  publishedAt,
  mediaType,
  body
}`;

export async function getDetailPost(slug: string) {
  return await client.fetch(getPostDetailQuery, {
    slug,
    revalidate: new Date().getHours(),
  });
}
