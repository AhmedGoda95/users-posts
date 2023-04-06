import { Box, Typography } from "@mui/material";
import { FC } from "react";

const UserItem: FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: 1,
      }}
    >
      <Typography
        sx={({ palette }) => ({
          color: palette.grey[700],
          marginInlineEnd: 2,
          minWidth: 125,
          fontSize: 16,
        })}
      >
        {title}:
      </Typography>
      <Typography
        sx={({ palette }) => ({
          color: palette.grey[900],
          fontSize: 18,
          wordBreak: "break-all",
        })}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default UserItem;
