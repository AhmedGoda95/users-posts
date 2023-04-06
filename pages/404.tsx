import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#000",
        height: "100vh",
      }}
    >
      <Typography component="h2" sx={{ fontSize: 64, lineHeight: 1 }}>
        404
      </Typography>
      <Typography
        component="h3"
        sx={{
          fontSize: 24,
          marginBottom: 3,
        }}
      >
        Page not found
      </Typography>
      <Button onClick={() => router.push("/")} variant="outlined">
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
