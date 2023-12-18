import React from "react";

import { Link } from "react-router-dom";

import "./NavbarList.css";

const NavbarList = () => {
  const NAVBAR_LIST = (
    <ul className="ul">
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
        <Link to={"/creators"} className="element animtaion no-blur">
          Creators
        </Link>
      </li>
      <li className="li">
        <Link to={"/blog"} className="element animtaion no-blur">
          Blog
        </Link>
      </li>
    </ul>
  );

  return <React.Fragment>{NAVBAR_LIST}</React.Fragment>;
};

export default NavbarList;
