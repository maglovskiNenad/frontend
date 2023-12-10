import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeUIProvider } from "theme-ui";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import theme from "./UI/them";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeUIProvider>
  </React.Fragment>
);

reportWebVitals();
