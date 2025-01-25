import React from "react";
import "./Navbar.css";
import start from "../../assets/start.svg";
import hamburger from "../../assets/hamburger.svg";

const Navbar = () => {
  return (
    <section className='nav-header'>
    <div className='navbar'>
      <img src={start} alt="Logo" className='logo' />
      <img src={hamburger} alt="" className='menu'/>
    </div>
    <div className="links">
      <nav className='nav-links'>
        <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Our Services</li>
            <li>Contact</li>
      </ul>
      </nav>

    </div>
    </section>
  );
};

export default Navbar;
