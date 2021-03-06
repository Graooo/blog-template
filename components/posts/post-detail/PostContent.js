import React from "react";
import ReactMarkDown from "react-markdown";

import PostHeader from "./PostHeader";

import styles from "./PostContent.module.css";

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkDown>{post.content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
