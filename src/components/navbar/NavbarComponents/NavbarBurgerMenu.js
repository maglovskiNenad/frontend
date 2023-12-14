import React from "react";

import "./NavbarBurgerMenu.css";

const NavbarBurgerMenu = (props) => {
  const resize = props.onOpenBurgerMenu ? "one resize" : "one two";
  const deleted = props.onOpenBurgerMenu ? "one delete" : "one three";

  return (
    <li className="burger-menu">
      <span className="one"></span>
      <span className={resize}></span>
      <span className={deleted}></span>
    </li>
  );
};

export default NavbarBurgerMenu;
