import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import '../App.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
  };

  // Handle increasing the quantity of a product
  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => 
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
  };

  // Handle decreasing the quantity of a product
  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => 
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
  };

  // Calculate total price of the cart
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  };

  return (
    <div>
        <div>
      {cart.length === 0 ? (
        <div className='Cart-container'>
          <div className='products-row'>
            <p>No items are added to the cart.</p>
          </div>
          <div className='product-summary'>
            <h6>Cart Summary</h6>
            <p>Total Price:</p>
            <p>$0.00</p>
          </div>
        </div>
      ) : (
        <div className='Cart-container'>
          <div className="products-row">
            {cart.map((product) => (
              <div key={product.id} className="Cart-item">
                <div className='Remove-Div'>
                    <button onClick={() => handleRemoveFromCart(product.id)}>x</button>
                </div>
                <div className='product-holder'>
                    <div className='Image-Div'>
                        <img src={product.imgUrl} alt={product.productName} />
                    </div>
                    <div className='Desc-Div'>
                        <h3>{product.productName}</h3>
                        <div style={{display:"flex"}}>
                            <p>${product.price} x {product.quantity}</p>
                            <p style={{fontWeight:"900"}}>{product.price}</p>
                        </div>
                    </div>
                    <div className='Quality-Div'>
                        <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                        <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                    </div>
                </div>
              </div>
            ))}
          </div>

          <div className='product-summary'>
            <h6>Cart Summary</h6>
            <p>Total Price:</p>
            <p>${getTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default Cart;
