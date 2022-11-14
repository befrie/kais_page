import React from "react";
import styles from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/${slug}/${slug}1.jpg`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
