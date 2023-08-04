import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <Link className="navlink" to="/">
              Home
            </Link>
            <Link className="navlink" to="/about">
              about
            </Link>
            <Link className="navlink" to="/contactus">
              Contact Us
            </Link>
          </div>
          <div className="nav-right">
            <Link className="navlink" to="#">
              Login
            </Link>
            <Link className="navlink" to="#">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
