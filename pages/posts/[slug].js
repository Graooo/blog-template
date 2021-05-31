import React from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostFiles } from "../../lib/posts-ulti";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
