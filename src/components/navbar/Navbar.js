import React, { useState } from "react";
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
