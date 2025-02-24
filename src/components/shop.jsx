import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$1025", imgSrc:"/public/ip13.png" },
  { id: 2, name: "Product 2", price: "$2040", imgSrc: "/public/mac.png" },
  { id: 3, name: "Product 3", price: "$160", imgSrc: "/public/camera.png" },
  { id: 4, name: "Product 4", price: "$40", imgSrc: "/public/jeans.png" },
  { id: 5, name: "Product 5", price: "$15", imgSrc: "/public/led.png" },
  { id: 6, name: "Product 6", price: "$60", imgSrc: "/public/t-shirt.webp" },
  { id: 7, name: "Product 7", price: "$60", imgSrc: "/public/t-shirtt.webp" },
  { id: 8, name: "Product 8", price: "$5", imgSrc: "/public/cap.webp" },
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
