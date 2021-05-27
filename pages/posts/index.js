import React from "react";

import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    slug: "next-js1",
    title: "next JS 1",
    image: "next-js.png",
    excerpt: "next is a frontend framework",
    date: "2022-02-10",
  },
  {
    slug: "next-js2",
    title: "next JS 2",
    image: "next-js.png",
    excerpt: "next is a frontend framework",
    date: "2022-02-10",
  },
  {
    slug: "next-js3",
    title: "next JS 3",
    image: "next-js.png",
    excerpt: "next is a frontend framework",
    date: "2022-02-10",
  },
  {
    slug: "next-js4",
    title: "next JS 4",
    image: "next-js.png",
    excerpt: "next is a frontend framework",
    date: "2022-02-10",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
