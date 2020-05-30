import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { AppProps, Container } from "next/app";
import Header from "../components/Header";
import React from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
