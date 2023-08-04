import React from "react";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy;OM </h4>
      <p className="text-center mt-3">
        <Link to="/">| Home |</Link>
        <Link to="/about">| About |</Link>
        <Link to="/contactus">Contact |</Link>
      </p>
    </div>
  );
};

export default Footer;
