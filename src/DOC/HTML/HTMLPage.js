import React from "react";

const HtmlMainPage = (props) => {
  return (
    <div className="html-wraper">
      <div className="h3-wraper">
        <div className="h3">{props.description}</div>
      </div>
      <div className="p-wraper">
        <div className="p">{props.text}</div>
      </div>
    </div>
  );
};

export default HtmlMainPage;
