import React, { useEffect, useState } from "react";
import NavbarList from "./NavbarComponents/NavbarList";
import NavbarBurgerMenu from "./NavbarComponents/NavbarBurgerMenu";
import NavbarBtnTheme from "./NavbarComponents/NavbarBtnTheme";

import "./Navbar.css";

const Navbar = () => {
  const [burgerMenuIsVisible, setBurgerMenuIsVisible] = useState(false);
  // Velicina ekrana
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  // Ugnjezdijivanje velicine u funkciju
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  // Funkcija koja se stalno poziva na minimalno promeni sirine ekrana
  useEffect(() => {
    // Poziv promene ekrana
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  //Uslov za proveravenje stanja useState koji je postavljen gore
  if (windowSize.width >= 480 && burgerMenuIsVisible !== true) {
    // U slucaju da je uslov ispunjen promena stanja
    setBurgerMenuIsVisible(true);
  }

  //Promena stanja vidljivosti dropdown menija
  const dropdownMenuHandler = () => {
    //Svakim klikom se menja stanje
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
