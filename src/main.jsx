import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryProvider } from "./providers";
import { GlobalStyle } from "./styles/global";
import reportAccessibility from "./utils/reportAccessibility";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>
);

reportAccessibility(React);
