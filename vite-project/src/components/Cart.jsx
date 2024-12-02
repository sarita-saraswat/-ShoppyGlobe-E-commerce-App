import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, modifyQuantity } from "../redux/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!items.length) return <p>Your cart is empty!</p>;

  const handleQuantityChange = (id, quantity) => {
    dispatch(modifyQuantity({ id, quantity: parseInt(quantity, 10) }));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
              -
            </button>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => dispatch(removeItem(item.id))} className="remove-button">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
