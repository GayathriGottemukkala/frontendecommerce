import React, { useState } from "react"
import bin from "../assests/bin.jpg"
import { SlBasket } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">MySite</div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className="search-bar">
            <input type="search" placeholder="Search Here"/> 
<FaSearch/>
          </li>
         
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/content">Contact</a></li>
          <li><a href="/login">login</a></li>
          <li> <SlBasket /></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
