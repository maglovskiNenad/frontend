import React, { useState } from "react";
import NavbarList from "./NavbarComponents/NavbarList";
import NavbarBurgerMenu from "./NavbarComponents/NavbarBurgerMenu";
import NavbarBtnTheme from "./NavbarComponents/NavbarBtnTheme";

import "./Navbar.css";

const Navbar = () => {
  const [burgerMenuIsVisible, setBurgerMenuIsVisible] = useState(false);

  // const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
  // const handleResize = () => {
  //   setWindowSize({
  //     width: window.innerWidth,
  //   });
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.addEventListener("resize", handleResize);
  //   };
  // }, []);

  const dropdownMenuHandler = () => {
    setBurgerMenuIsVisible(!burgerMenuIsVisible);
  };

  const shownigDropdownMenu = burgerMenuIsVisible
    ? "nav-list-wraper dropdown-menu_block"
    : "nav-list-wraper dropdown-menu_none";

  return (
    <div className="navbar-wraper border">
      <div className="navbar-components-wraper" onClick={dropdownMenuHandler}>
        <NavbarBurgerMenu onOpenBurgerMenu={burgerMenuIsVisible} />
        <NavbarBtnTheme />
      </div>
      <div className={shownigDropdownMenu}>
        <NavbarList />
      </div>
    </div>
  );
};

export default Navbar;
