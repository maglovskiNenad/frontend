import React, { useState } from "react";
import { Switch, useColorMode } from "theme-ui";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState();
  //   const [isVisible, setIsVisible] = useState();

  const handleThemeChange = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    setState(colorMode === "light" ? "dark" : "light");
  };
  return (
    <div className="navbar-wraper">
      <Switch className="switch" onChange={handleThemeChange} />
    </div>
  );
};

export default Navbar;
