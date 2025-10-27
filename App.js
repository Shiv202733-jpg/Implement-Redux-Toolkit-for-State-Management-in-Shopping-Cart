import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Redux Toolkit Shopping Cart</h1>
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
