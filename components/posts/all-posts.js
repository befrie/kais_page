import PostsGrid from "./posts-grid";
import styles from "./all-posts.module.css";
import { getAllMdFiles } from "../../lib/file-utils";

export function AllPosts(props) {
  return (
    <section section className={styles.postLatest}>
      <h2>All Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export function getStaticProps() {
  const allMds = getAllMdFiles();
  return {
    props: {
      posts: allMds || null,
    },
  };
}
