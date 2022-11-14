import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import Image from "next/image";
import React from "react";
// import path from "path";

function PostContent(props) {
  const { post } = props;

  const MarkdownComponents = {
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={300}
              height={400}
            />
          </div>
        );
      }
      return <p>paragraph.children</p>;
    },
  };
  // const mdDirectory = path.join(process.cwd(), "content\\typescript");
  const imagePath = `/images/${post.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={MarkdownComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
