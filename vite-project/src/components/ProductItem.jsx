import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import "../style/app.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

 
  return (
    <div className="product-item">
       <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </Link>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
