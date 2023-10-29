import React from "react";
import { HTML_DATA } from "../../DOC/HTML/HTMLData";
import HTMLData from "../../DOC/HTML/HTMLPage";

import "./HtmlPage.css";

const HtmlPage = () => {
  const description = HTML_DATA.map((a) => {
    return a.description;
  });

  const text = HTML_DATA.map((a) => {
    return a.text;
  });

  return <HTMLData description={description} text={text}></HTMLData>;
};

export default HtmlPage;
