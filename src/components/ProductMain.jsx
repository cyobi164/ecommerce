import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Outer from "../assets/photo/Outer.avif";

const ProductMain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [products, setProducts] = useState([
    { id: 1, name: "Outer", price: 50, qty: 100, image: Outer },
    { id: 2, name: "Jacket", price: 70, qty: 200, image: "" }, // Add proper image if available
  ]);

  const updateQuantity = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, Number(p.qty) + change) } : p
      )
    );
  };

  const subtotal = products.reduce((acc, p) => acc + p.price * p.qty, 0);
  const tax = subtotal * 0.1724;
  const total = subtotal + tax;

  return (
    <div className="product-page">
      <ProductHeader />
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="checkout-bar">
        <div className="checkout-box">Subtotal: ${subtotal.toFixed(2)}</div>
        <div className="checkout-box">Tax: ${tax.toFixed(2)}</div>
        <div className="checkout-box total">Total: ${total.toFixed(2)}</div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default ProductMain;
