import theme from "@rebass/preset-material";
import { ThemeProvider } from "emotion-theming";
import Head from "next/head";
import { Box } from "rebass";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Box as="main" fontFamily="body">
          {children}
        </Box>
      </ThemeProvider>
    </>
  );
}
