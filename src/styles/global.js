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
    --blue: #3798D4;
    --orange: #E02E06;
    --yellow: #FDF6C3;
    --light-grey: #e8e8e8;
    --dark-grey: #434B54;
    --grey: #696F8C;
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
