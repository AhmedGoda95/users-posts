import { Box, Typography } from "@mui/material";
import { FC } from "react";
import useSWR from "swr";

import { BASE_URL } from "../../../config";
import Comment from "./components/Comment";
import EmptyData from "../../../shared/ui/EmptyData";
import SpinnerLoader from "../../../shared/ui/SpinnerLoader";
import Error from "../../../shared/ui/Error";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}posts/${postId}/comments`,
    fetcher
  );

  return (
    <>
      <Typography
        sx={{ marginBottom: 2, color: "#000", fontSize: 24 }}
        component="h2"
      >
        Comments
      </Typography>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "#f7f7f7",
          borderRadius: 1,
          maxHeight: "70vh",
          overflow: isLoading ? "hidden" : "auto",
        }}
      >
        <SpinnerLoader
          loading={isLoading}
          sx={{
            height: "70vh",
          }}
        >
          <Error error={error}>
            <EmptyData empty={data?.length === 0} color="#202020">
              {data?.map((comment: any) => {
                return (
                  <Box sx={{ marginBottom: 1.5 }} key={comment.id}>
                    <Comment name={comment.name} body={comment.body} />
                  </Box>
                );
              })}
            </EmptyData>
          </Error>
        </SpinnerLoader>
      </Box>
    </>
  );
};

interface PostCommentsProps {
  postId: string;
}

export default PostComments;
