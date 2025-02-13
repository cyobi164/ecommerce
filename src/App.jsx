import React from "react";
import ProductMain from "./components/ProductMain"
import ProductHeader from "./components/ProductHeader";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <ProductHeader />
      <ProductMain />
      <ProductCard />
    </div>
  );
}

export default App;
