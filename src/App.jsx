import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  const [cart, setCart] = useState([]); // 🛒 Savatcha

  // ✅ Mahsulotni qo‘shish yoki sonini oshirish
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Mahsulot bor bo‘lsa, faqat sonini oshiramiz
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Mahsulot yangi bo‘lsa, quantity=1 qilib qo‘shamiz
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Mahsulot miqdorini oshirish yoki kamaytirish
  const updateCart = (productId, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0) // Agar 0 bo‘lsa, o‘chirilsin
    );
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
