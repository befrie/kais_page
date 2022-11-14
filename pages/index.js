import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedMdFiles from "../components/home-page/featured-mdFiles";
import { getFeaturedMdFiles } from "../lib/file-utils";

export default function Posts(props) {
  return (
    <>
      <Hero />
      <FeaturedMdFiles mdFiles={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredMds = getFeaturedMdFiles();
  // console.log(featuredMds);
  return {
    props: {
      posts: featuredMds,
    },
  };
}
