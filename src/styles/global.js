import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --blue: #3998d3;
    --orange: #fa876d;
    --yellow: #FDF6C3;
    --grey: #C4CACD;
    --white: #ffffff;
    --black: #000000;
  }

  h1, h2, h3, h4, h5, h6, strong, p, span, a {
    font-family: 'Poppins', sans-serif;
  }

  input {
    color: inherit;
    outline: inherit;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
