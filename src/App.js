import React from "react";

import MainPage from "./components/home/MainPage";
import Navbar from "./components/navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
