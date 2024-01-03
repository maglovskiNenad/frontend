import React, { useState } from "react";

import "./MainPageNavbar.css";
import { Link } from "react-router-dom";

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
        <Link to="/html" className="section">
          HTML
        </Link>
        <li className="section">CSS</li>
        <li className="section">JS</li>
      </ul>
    </div>
  );
};

export default MainPageNavbar;
