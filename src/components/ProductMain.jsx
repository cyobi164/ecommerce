import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";
import "./style.css"

const ProductMain = () => {
    const [products, setProducts] = useState([
        {id:1, name: "....", price: "...", qty: "100" /*image:*/},
        {id:2, name: "....", price: "...", qty: "200" /*image:*/}
    ]);

    const updateQuantity = (id, change) => {
        setProducts(products.map(p => p,id === id ? {...p, qty: Math.max(1, p.qty + change)} : p));
    };

    const subtotal = products.reduce((acc, p) => acc + p.price * p.qty, 0);
    const tax = subtotal * 0.1724;
    const total = subtotal + tax;

    return(
        <div className="product-page">
            <ProductHeader />
            <div className="product-container">
                {products.map (product => (
                    <ProductCard key={product.id} product={product} updateQuantity={updateQuantity} />
                ))}
            </div>
            <div className="checkout-bar">
                <div className="checkout-box">Subtotal: ${subtotal.toFixed(2)}</div>
                <div className="checkout-box">Tax: ${tax.toFixed(2)}</div>
                <div className="checkout-box total">Total: ${total.toFixed(2)}</div>
                <button className="checkout-bth">Checkout</button>
            </div>
        </div>
    );
    
};


export default ProductMain;