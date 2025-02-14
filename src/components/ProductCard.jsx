import React, { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

// ProductCard Component
const ProductCard = ({ product, updateQuantity }) => {
  // Handle undefined product to prevent crashes
  if (!product) {
    console.error("Error: 'product' is undefined.");
    return <p>Error: Product data is missing.</p>;
  }

  return (
    <div className="product-card">
      <button className="close-btn">&times;</button>

      {/* Ensure correct JSX syntax for image attributes */}
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>
      <p>250mg</p>

      <div className="quantity-control">
        <button onClick={() => updateQuantity(product.id, -1)}>
          <Minus />
        </button>
        <span>{product.qty}</span>
        <button onClick={() => updateQuantity(product.id, 1)}>
          <Plus />
        </button>
      </div>

      <p className="price">
        ${product.price && product.qty ? (product.price * product.qty).toFixed(2) : "N/A"}
      </p>
    </div>
  );
};

// Parent Component
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch products
    const fetchProducts = async () => {
      try {
        const data = [
          { id: 1, name: "Product A", price: 10, qty: 1, image: "https://via.placeholder.com/150" },
          { id: 2, name: "Product B", price: 20, qty: 1, image: "https://via.placeholder.com/150" }
        ];
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to update quantity
  const updateQuantity = (id, amount) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, qty: Math.max(0, product.qty + amount) } : product
      )
    );
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} updateQuantity={updateQuantity} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductList;
