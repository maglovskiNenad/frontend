import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import theme from "./UI/them";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.Fragment>
);

reportWebVitals();
