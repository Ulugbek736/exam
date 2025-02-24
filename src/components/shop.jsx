import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$25", imgSrc:"/public/ip13.png" },
  { id: 2, name: "Product 2", price: "$40", imgSrc: "/public/mac.png" },
  { id: 3, name: "Product 3", price: "$60", imgSrc: "/public/camera.png" },
];

function Shop() {
  return (
    <section id="shop" className="shop">
      <h2>Shop</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
