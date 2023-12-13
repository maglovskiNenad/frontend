//import React, { useState } from "react";
import NavbarList from "./NavbarComponents/NavbarList";
import NavbarBurgerMenu from "./NavbarComponents/NavbarBurgerMenu";
import NavbarBtnTheme from "./NavbarComponents/NavbarBtnTheme";

import "./Navbar.css";

const Navbar = () => {
  //const [burgerMenuIsVisible, setBurgerMenuIsVisible] = useState(true);
  return (
    <div className="navbar-wraper border">
      <NavbarBurgerMenu />
      <NavbarList />
      <NavbarBtnTheme />
    </div>
  );
};

export default Navbar;
