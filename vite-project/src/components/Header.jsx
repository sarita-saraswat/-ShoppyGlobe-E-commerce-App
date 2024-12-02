import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/App.css";
const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
         <h1>ShoppyGlobe</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
