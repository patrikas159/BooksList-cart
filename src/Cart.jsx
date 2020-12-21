

import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <>
      <h1>Cart</h1>
      <div className="bookslist">
        {cart.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h4>{product.price}</h4>
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Cart