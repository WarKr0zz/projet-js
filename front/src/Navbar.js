import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default Navbar;