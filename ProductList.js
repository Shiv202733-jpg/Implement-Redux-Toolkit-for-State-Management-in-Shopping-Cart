import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 70000 },
  { id: 2, name: 'Headphones', price: 2000 },
  { id: 3, name: 'Keyboard', price: 1500 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <strong>{p.name}</strong> — ₹{p.price}
          <button
            style={{ marginLeft: 8 }}
            onClick={() => dispatch(addToCart(p))}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
