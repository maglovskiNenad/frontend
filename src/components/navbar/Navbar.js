import React, { useEffect, useState } from "react";
import { Switch, useColorMode } from "theme-ui";
import NavComponenst from "./NavComonents";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState();

  const handleThemeChange = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    setState(colorMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setColorMode(colorMode === "light" ? "light" : "dark");
    setState(colorMode === "light" ? "light" : "dark");
  }, []);

  return (
    <div className="navbar-wraper border">
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
