import { Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      sx={({}) => ({
        backgroundColor: "#2E88C4",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& a": {
          color: "#fff",
          marginInline: 1.5,
          textDecoration: "none",
          fontSize: 20,
          transition: "all .25s ease",
          "&:hover": {
            color: "#202020",
          },
        },
      })}
    >
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
    </Box>
  );
};

export default Header;
