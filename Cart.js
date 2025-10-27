import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';

export default function Cart() {
  const { cartItems, totalQuantity, totalPrice } = useSelector(s => s.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ marginBottom: 8 }}>
            <strong>{item.name}</strong> — ₹{item.price} ×
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              style={{ width: 60, marginLeft: 8, marginRight: 8 }}
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
      <hr />
      <div>Total items: {totalQuantity}</div>
      <div>Total price: ₹{totalPrice}</div>
      <button onClick={() => dispatch(clearCart())} style={{ marginTop: 8 }}>Clear Cart</button>
    </div>
  );
}
