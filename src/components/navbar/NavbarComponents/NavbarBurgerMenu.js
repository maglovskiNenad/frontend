import React, { useState } from "react";

import "./NavbarBurgerMenu.css";

const NavbarBurgerMenu = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(true);

  const burgerMenuHandler = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };

  return (
    <div className="burger-menu-wraper">
      <li className="burger-menu" onClick={burgerMenuHandler}>
        <span className="one"></span>
        <span className="one two"></span>
        <span className="one three"></span>
      </li>
    </div>
  );
};

export default NavbarBurgerMenu;
