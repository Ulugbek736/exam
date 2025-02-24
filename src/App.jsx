import React from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";  // Shop bo'limi
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Shop /> {/* Shop bo'limi birinchi o'rinda */}
      <Contact />
      <Cart />
    </div>
  );
}

export default App;
