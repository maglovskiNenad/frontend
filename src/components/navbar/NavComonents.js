import React, { useEffect, useState } from "react";

import { useWindowSize } from "react-use";

import "./NavComponenets.css";

const NavComponenst = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(true);
  const [burgerMenuIsVisible, setBurgerMenuIsVisible] = useState(true);

  // dobija velicnu na svaku promenu
  const { width } = useWindowSize();

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

  // grska se pojavljuje kada se naglo menjaju velicine ekrana ili kad se sa malog ekrana azurira stranica na veliki
  const handlingDisplaySize = (width) => {
    if (width > 600) {
      setBurgerMenuIsVisible(!burgerMenuIsVisible);
      setOpenBurgerMenu(openBurgerMenu);
    } else if (width <= 600) {
      setBurgerMenuIsVisible(burgerMenuIsVisible);
      setOpenBurgerMenu(!openBurgerMenu);
    }
  };

  useEffect(() => {
    handlingDisplaySize(width);
    console.log(width);
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
