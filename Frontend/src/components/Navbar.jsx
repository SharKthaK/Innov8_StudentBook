import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="image">
      <img src="/images/AI26/logo.jpg" className="logo"/>
     
      <Link to="/" className="title">StudentBook</Link>
      </div>
      <div className="menu" onClick={()=>{
        setShowMenu(!showMenu);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={showMenu ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;