import React, { useState } from "react";

import "./MainPageNavbar.css";

const MainPageNavbar = () => {
  const [sideNavbar, setSideNavbar] = useState(true);

  const sideNavbarHandler = () => {
    setSideNavbar(!sideNavbar);
  };

  const conditionSideNavbar = sideNavbar
    ? "side-navbar-wraper showSideNavbar"
    : "side-navbar-wraper hideSideNavbar";

  return (
    <div className={conditionSideNavbar} onClick={sideNavbarHandler}>
      <div className="side-navbar">
        <p className="section">HTML</p>
        <p className="section">CSS</p>
        <p className="section">JS</p>
      </div>
    </div>
  );
};

export default MainPageNavbar;
