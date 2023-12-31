import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Creators from "./page/Creators/Creators";
import MainPageNavbar from "./components/home/MainPageComponents/MainPageNavbar";
import Footer from "./components/footer/Footer";
import Blog from "./page/Blog/Blog";
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
              <Route path="*" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/creators" element={<Creators />} />
              <Route path="/blog" element={<Blog />} />
              <Route component={<ErrorPage />} />
            </Routes>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export default App;
