import React from "react";

import { HTML_DATA } from "../../DOC/HTML/HTMLData";
import "./HtmlPage.css";

const HtmlPage = () => {
  const description = (
    <div className="block">
      {HTML_DATA.map((data) => {
        return (
          <div className="main-description" key={data.id}>
            {data.description}
          </div>
        );
      })}
    </div>
  );

  const text = (
    <div className="block">
      {HTML_DATA.map((data) => {
        return (
          <div className="main-text" key={data.id}>
            {data.text}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="main-html-wraper">
      <div className="html-description">{description}</div>
      <div className="html-text">{text}</div>
    </div>
  );
};

export default HtmlPage;
