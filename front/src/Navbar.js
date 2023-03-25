import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/Acceuil">Acceuil</Link>
      <Link to="/AboutUs">Qui sommes-nous</Link>
      <Link to="/Contact">Contact</Link>
  
      
    </div>
  );
};

export default Navbar;