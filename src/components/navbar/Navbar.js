import React, { useEffect, useState } from "react";
import { Switch, useColorMode } from "theme-ui";
import NavComponenst from "./NavComonents";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState();
  //reaguje na sve ekrane podesi da REAGUJE SAMO NA MALE EKRANE,dodaj animaciju
  const [showMenu, setShowMenu] = useState();

  const handlingDisplaySize = () => {
    //ovom funkcijom dobijas dimenziju ekrana pokusaj da na to odreaguje nav bar
    let width = window.innerWidth;
    //console.log(width);
  };

  const handleThemeChange = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    setState(colorMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setColorMode(colorMode === "light" ? "light" : "dark");
    setState(colorMode === "light" ? "light" : "dark");
  }, []);

  const handleNavMenu = () => {
    setShowMenu(!showMenu);
  };

  handlingDisplaySize();

  return (
    <div className="navbar-wraper">
      <NavComponenst />
      <div className="btn">
        <BiSolidMoon className="moon" />
        <Switch className="switch" onChange={handleThemeChange} />
        <BiSolidSun className="sun" />
      </div>
    </div>
  );
};

export default Navbar;
