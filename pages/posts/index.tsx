import PostsList from "@/shared/Posts/List";
import { FC } from "react";

const Posts: FC<{ postsData: Record<string, any>[] }> = ({ postsData }) => {
  return <PostsList postsData={postsData} />;
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsData = await response.json();
  return {
    props: {
      postsData,
    },
  };
}
