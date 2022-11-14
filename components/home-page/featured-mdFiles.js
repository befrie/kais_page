import React from "react";
import PostsGrid from "../posts/posts-grid";
import styles from "./featured-mdFiles.module.css";

export default function FeaturedMdFiles(props) {
  // console.log(props);
  return (
    <section className={styles.latest}>
      <h2>Eine Auswahl meiner Gitarren</h2>
      <PostsGrid posts={props.mdFiles} />
    </section>
  );
}
