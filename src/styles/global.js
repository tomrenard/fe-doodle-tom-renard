import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  :root {
    --blue: #32B6FF;
    --orange: #fa876d;
    --yellow: #FDF6C3;
    --grey: #C4CACD;
    --green: #0e3830;
    --dark-blue: #2E76A2;
    --white: #ffffff;
    --black: #000000;
  }

  h1, h2, h3, h4, h5, h6, strong, p, span, a {
  }

  body {
    background-color: var(--green) ;
  }

  input {
    color: inherit;
    outline: inherit;
    border: none;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
