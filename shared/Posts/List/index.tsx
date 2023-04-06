import { FC } from "react";
import { Grid } from "@mui/material";

import PostItem from "./PostItem";

const PostsList: FC<{ postsData: Record<string, any>[] }> = ({ postsData }) => {
  return (
    <Grid container spacing={2}>
      {postsData.map((post) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <PostItem id={post.id} title={post.title} body={post.body} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PostsList;
