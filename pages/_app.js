import App from "next/app";
import React from "react";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: "Roboto", "sans-serif";
    display: flex;
    flex-direction: column;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
