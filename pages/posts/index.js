import React from "react";

import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-ulti";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
