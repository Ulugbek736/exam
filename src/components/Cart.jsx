import React from "react";

function Cart() {
  const cartItems = [
    { id: 1, name: "Product 1", price: "$25" },
    { id: 2, name: "Product 2", price: "$40" },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)),
    0
  );

  return (
    <section id="cart" className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
      <button>Checkout</button>
    </section>
  );
}

export default Cart;
