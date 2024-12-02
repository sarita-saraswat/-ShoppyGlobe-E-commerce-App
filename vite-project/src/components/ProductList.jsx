import React, { useState } from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import "../style/App.css";

const ProductList = () => {
    const { products, error } = useFetchProducts("https://dummyjson.com/products");
  
    if (error) return <p>Error: {error}</p>;
    if (!products.length) return <p>Loading...</p>;
  
    return (
      <div className="product-list">
        <div className="products">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;