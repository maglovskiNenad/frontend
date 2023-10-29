import React from "react";

const htmlMain = (props) => {
  return (
    <div className="html-wrpaer">
      <h3 className="h3">{props.description}</h3>
      <p className="p">{props.text}</p>
    </div>
  );
};

export default htmlMain;
