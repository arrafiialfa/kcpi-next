import type { AppProps } from "next/app";
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
