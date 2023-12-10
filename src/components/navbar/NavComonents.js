import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

import "./NavComponenets.css";

const NavComponenst = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(true);
  const [burgerMenuIsVisible, setBurgerMenuIsVisible] = useState(true);

  const burgerMenuHandler = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };

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

  const BURGER_MENU = (
    <li className="burger-menu" onClick={burgerMenuHandler}>
      <span className="one"></span>
      <span className="one two"></span>
      <span className="one three"></span>
    </li>
  );

  const { width } = useWindowSize();

  useEffect(() => {
    const handlingDisplaySize = (width) => {
      if (width > 600) {
        setBurgerMenuIsVisible(!burgerMenuIsVisible);
        setOpenBurgerMenu(openBurgerMenu);
      } else if (width <= 600) {
        setBurgerMenuIsVisible(burgerMenuIsVisible);
        setOpenBurgerMenu(!openBurgerMenu);
      }
    };
    handlingDisplaySize(width);
  }, [width]);

  const CONDITION_MENU_VISABILITY = burgerMenuIsVisible ? BURGER_MENU : "";
  const OPENING_BURGER_MENU = openBurgerMenu ? NAVBAR_LIST : "";

  return (
    <div className="nav-fragment">
      <div className="nav">
        <div className="u-list">
          {CONDITION_MENU_VISABILITY}
          {OPENING_BURGER_MENU}
        </div>
      </div>
    </div>
  );
};

export default NavComponenst;
