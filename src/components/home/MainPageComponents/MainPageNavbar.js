import React, { useState } from "react";

import "./MainPageNavbar.css";

const MainPageNavbar = () => {
  const [sideNavbar, setSideNavbar] = useState(true);

  const sideNavbarHandler = () => {
    setSideNavbar(!sideNavbar);
  };

  const conditionShowNavbar = sideNavbar
    ? "side-navbar-wraper hideNavbar"
    : "side-navbar-wraper showNavbar";

  return (
    <div className={conditionShowNavbar}>
      <ul className="side-navbar">
        <button className="side-btn" onClick={sideNavbarHandler}>
          <span className="line"></span>
        </button>
        <li className="section">HTML</li>
        <li className="section">CSS</li>
        <li className="section">JS</li>
      </ul>
    </div>
  );
};

export default MainPageNavbar;
