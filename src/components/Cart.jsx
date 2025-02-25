import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart }) {
  const navigate = useNavigate();

  // Jami narxni hisoblash
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);

  console.log(cart); // 🔍 Mahsulotlar obyektini konsolda tekshirish

  return (
    <section id="cart" className="cart">
      <h2 className="cart-title">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img 
                src={item.imgSrc ? item.imgSrc : "/images/no-image.jpg"} 
                alt={item.name} 
                className="cart-item-image" 
              />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h3>Total: <span>${total.toFixed(2)}</span></h3>
      </div>

      <div className="cart-buttons">
        <button className="checkout-btn" onClick={() => alert("Checkout process...")}>
          Checkout
        </button>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Shop 🛍
        </button>
      </div>
    </section>
  );
}

export default Cart;
