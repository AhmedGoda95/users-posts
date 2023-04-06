import { FC } from "react";

import { Grid } from "@mui/material";
import PostData from "@/shared/Posts/Details/PostData";
import UserCreator from "@/shared/Posts/Details/UserCreator";
import PostComments from "@/shared/Posts/Details/PostComments";

const PostDetails: FC<{ postData: Record<string, any> }> = ({ postData }) => {
  console.log({ postData });
  return (
    <Grid container columnSpacing={2} rowSpacing={3} justifyContent="center">
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          order: {
            md: 0,
            xs: 1,
          },
        }}
      >
        <PostData title={postData.title} body={postData.body} />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          order: {
            md: 1,
            xs: 0,
          },
        }}
      >
        <UserCreator userId={postData.userId} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          order: 2,
        }}
      >
        <PostComments postId={postData.id} />
      </Grid>
    </Grid>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post: any) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const postData = await response.json();
  return {
    props: {
      postData,
    },
  };
}
