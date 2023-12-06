import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Creators from "./page/Creators/Creators";
import Components from "./page/Components/Components";
import MainPageNavbar from "./components/home/MainPageNavbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="main-navbar">
          <MainPageNavbar />
        </div>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/components" element={<Components />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
