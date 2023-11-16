import React from "react";
import HtmlMainPage from "../../DOC/HTML/HTMLPage";
import { HTML_DATA } from "../../DOC/HTML/HTMLData";
import "./HtmlPage.css";

const HtmlPage = () => {
  const description = HTML_DATA.map((data) => {
    return data.description;
  });

  const text = HTML_DATA.map((data) => {
    return data.text;
  });

  return <HtmlMainPage description={description} text={text}></HtmlMainPage>;
};

export default HtmlPage;
