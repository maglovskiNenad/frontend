import React from "react";
import HtmlPage from "../../page/HtmlPage/HtmlPage";

import "./MainPage.css";
import MainPageNavbar from "./MainPageNavbar";

const MainPage = () => {
  return (
    <div className="main-page-wraper">
      <HtmlPage />
      <MainPageNavbar />
    </div>
  );
};

export default MainPage;
