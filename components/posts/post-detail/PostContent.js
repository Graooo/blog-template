import React from "react";
import ReactMarkDown from "react-markdown";

import PostHeader from "./PostHeader";

import styles from "./PostContent.module.css";

const DUMMY_POST = {
  slug: "next-js1",
  title: "next JS 1",
  image: "next-js.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkDown>{DUMMY_POST.content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
