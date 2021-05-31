import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getPostFiles = () => {
  const postFiles = fs.readdirSync(postsDir);
  return postFiles;
};

export const getPostData = (fileName) => {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPost = getAllPosts();

  const featuredPosts = allPost.filter((post) => post.isFeatured);

  return featuredPosts;
};
