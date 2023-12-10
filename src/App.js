import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Creators from "./page/Creators/Creators";
import Components from "./page/Components/Components";
import MainPageNavbar from "./components/home/MainPageNavbar";
import Footer from "./components/footer/Footer";
import { Fade } from "react-reveal";

import "./App.css";
import ErrorPage from "./page/Error/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Fade left duration={1500}>
          <div className="main-navbar">
            <MainPageNavbar />
          </div>
        </Fade>
        <Fade right duration={1500}>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/creators" element={<Creators />} />
              <Route path="/components" element={<Components />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export default App;
