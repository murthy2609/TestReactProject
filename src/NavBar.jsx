import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul class="nav">
        <Link to="/">
          {" "}
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </Link>
        <Link to="/about">
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
        </Link>
        <Link to="/contat">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
