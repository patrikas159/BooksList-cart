import React, { useState } from 'react'


function Products({addToCart}) {
    const [products] = useState([
        {
            name: 'The Boy, the Mole, the Fox and the Horse',
            price: '14.25',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL210_SR210,210_.jpg '
        },
        {
          name: 'Dad Jokes: Terribly Good Dad Jokes',
          price: '6.30',
          image: 'https://images-na.ssl-images-amazon.com/images/I/615xbvz6ykL._AC_UL210_SR210,210_.jpg '
        },
        {
          name: 'Guinness World Records 2021',
          price: '14.50',
          image: 'https://images-na.ssl-images-amazon.com/images/I/A1TJNCSNPzL._AC_UL210_SR210,210_.jpg'
        },
        {
          name: 'Guinness World Records 2021',
          price: '10.99',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51iAiQTaFyL._AC_SX184_.jpg'
        }
      ]);

    return ( 
    <>
    <h1>Books</h1>
    <div className="bookslist">
    {products.map((product, index) =>(
     <div className="product" key={index}>
     <h3>{product.name}</h3>
     <img src={product.image} alt={product.name}/>
     <h4>{product.price}</h4>
     <button onClick={() => addToCart(product)}>
         Add to cart
         </button>
  </div>
    ))}
  </div>
  </>
    );

}

export default Products
