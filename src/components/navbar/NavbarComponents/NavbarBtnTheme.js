import React, { useState, useEffect } from "react";

import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { Switch, useColorMode } from "theme-ui";

import "./NavbarBtnTheme.css";

const NavbarBtnTheme = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState();

  const handleThemeChange = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    setState(colorMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setColorMode(colorMode === "light" ? "light" : "dark");
    setState(colorMode === "light" ? "light" : "dark");
  }, [colorMode, setColorMode]);

  return (
    <div className="btn">
      <BiSolidMoon className="moon" />
      <Switch className="switch" onChange={handleThemeChange} />
      <BiSolidSun className="sun" />
    </div>
  );
};

export default NavbarBtnTheme;
