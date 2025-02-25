import React, { useState } from "react"; // ✅ To‘g‘ri import
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  const [cart, setCart] = useState([]); // 🛒 Savatcha uchun useState

  // Savatchaga mahsulot qo‘shish funksiyasi
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
