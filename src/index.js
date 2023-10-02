import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeUIProvider } from "theme-ui";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import theme from "./UI/them";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <App />
    </ThemeUIProvider>
  </React.StrictMode>
);

reportWebVitals();

//Themaje postavljena neophodno je da se napravi funkcije i da se postavi u nav bar sledeci korak je napraviti nav bar
