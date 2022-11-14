import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getAllMds, getMdData } from "../../lib/file-utils";

export default function SinglePostPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getMdData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  const mdFileNames = getAllMds();
  const slugs = mdFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
