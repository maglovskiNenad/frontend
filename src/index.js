import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeUIProvider } from "theme-ui";
import reportWebVitals from "./reportWebVitals";
import theme from "./UI/them";

import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeUIProvider>
  </React.StrictMode>
);

reportWebVitals();

//Themaje postavljena neophodno je da se napravi funkcije i da se postavi u nav bar sledeci korak je napraviti nav bar
