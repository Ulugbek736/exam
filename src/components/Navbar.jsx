import React from "react";
import { Link } from "react-router-dom"; // React Router qo'shish

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>
      <Link to="/">Shop</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Go to Cart 🛒</Link>
      
    </nav>
  );
}

export default Navbar;
