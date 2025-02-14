import React from "react";
import { ShoppingCart, User } from "lucide-react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const ProductHeader = () => {
  return (
    <div className="header">
      <div className="logo">.....</div>
      <nav>
        <button className="bth">Product</button>
        <button className="bth">Contact</button>
      </nav>
      <div className="icons">
        <User size={25} />
        <ShoppingCart size={25} />
      </div>
    </div>
  );
};

export default ProductHeader;