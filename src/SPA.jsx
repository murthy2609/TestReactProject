import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contcat";

const SPA = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default SPA;
