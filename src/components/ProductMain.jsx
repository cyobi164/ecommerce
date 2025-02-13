import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", price: "$40", image: "https://via.placeholder.com/150" },
];

const MainContent = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard name={product.name} price={product.price} image={product.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
