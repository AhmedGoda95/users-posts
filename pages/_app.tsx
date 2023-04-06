import Footer from "@/shared/ui/Footer";
import Header from "@/shared/ui/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Box, Grid } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Header />
      <Box
        sx={{
          paddingBlock: 4,
          paddingInline: {
            xs: 1,
            sm: 0,
          },
          minHeight: `calc(100vh - 150px)`,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} lg={8} xl={6}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
