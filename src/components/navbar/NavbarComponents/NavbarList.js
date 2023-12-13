import React from "react";

import { Link } from "react-router-dom";

import "./NavbarList.css";

const NavbarList = () => {
  const NAVBAR_LIST = (
    <React.Fragment>
      <li className="li">
        <Link to={"/"} className="element animtaion no-blur">
          Home
        </Link>
      </li>
      <li className="li">
        <Link to={"/about"} className="element animtaion no-blur">
          About
        </Link>
      </li>
      <li className="li">
        <Link to={"/components"} className="element animtaion no-blur">
          Components
        </Link>
      </li>
      <li className="li">
        <Link to={"/creators"} className="element animtaion no-blur">
          Creators
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="nav-fragment">
      <div className="nav">
        <div className="u-list">{NAVBAR_LIST}</div>
      </div>
    </div>
  );
};

export default NavbarList;
