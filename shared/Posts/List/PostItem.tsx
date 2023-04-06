import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const PostItem: FC<{
  id: number | string;
  title: string;
  body: string;
}> = ({ id, title, body }) => {
  return (
    <Link href={`/posts/${id}`}>
      <Box
        sx={{
          backgroundColor: "#fff",
          paddingBlock: 2,
          paddingInline: 1.5,
          borderRadius: 1,
        }}
      >
        <Typography
          component="h2"
          sx={({ palette }) => ({
            color: palette.grey[900],
            marginBottom: 1.5,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            fontWeight: 600,
            fontSize: 20,
          })}
        >
          {title}
        </Typography>

        <Typography
          sx={({ palette }) => ({
            color: palette.grey[500],
            height: 75,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          })}
        >
          {body}
        </Typography>
      </Box>
    </Link>
  );
};

export default PostItem;
