import React, { useEffect, useState } from "react";

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
      <li className="element animtaion no-blur">Home</li>
      <li className="element animtaion no-blur">About</li>
      <li className="element animtaion no-blur">Components</li>
      <li className="element animtaion no-blur">Creators</li>
    </React.Fragment>
  );

  const BURGER_MENU = (
    <li className="burger-menu" onClick={burgerMenuHandler}>
      <span className="one"></span>
      <span className="one two"></span>
      <span className="one three"></span>
    </li>
  );

  const handlingDisplaySize = (width) => {
    if (width > 600) {
      setBurgerMenuIsVisible(!burgerMenuIsVisible);
      setOpenBurgerMenu(openBurgerMenu);
    } else if (width <= 600) {
      setBurgerMenuIsVisible(burgerMenuIsVisible);
      setOpenBurgerMenu(!openBurgerMenu);
    }
  };

  const { width } = useWindowSize();

  useEffect(() => {
    handlingDisplaySize(width);
  }, [width]);

  const CONDITION_MENU_VISABILITY = burgerMenuIsVisible ? BURGER_MENU : "";
  const OPENING_BURGER_MENU = openBurgerMenu ? NAVBAR_LIST : "";

  return (
    <div className="nav-fragment">
      <div className="nav">
        <ul className="u-list">
          {CONDITION_MENU_VISABILITY}
          {OPENING_BURGER_MENU}
        </ul>
      </div>
    </div>
  );
};

export default NavComponenst;
