import React from "react";
import { Link } from "react-router-dom"; // React Router qo'shish

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>
      <ul>
        <li><Link to="#shop">Shop</Link></li> {/* Home bo'limini olib tashladik */}
        <li><Link to="#contact">Contact</Link></li>
        <li><Link to="#cart">Cart (0)</Link></li> {/* Savatcha soni */}
      </ul>
    </nav>
  );
}

export default Navbar;
