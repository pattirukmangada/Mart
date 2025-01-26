import React, { useState } from "react"; // useState added for managing cart state
import { products } from "./products";
import heart from '../Images/heart.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

// Filter products by category 'mobile' or 'wireless'
const filteredProducts = products.filter(
  (product) => product.category === "mobile" || product.category === "wireless"
);

const NewArrival = () => {

  const handleAddToCart = (product) => {
    // Add product to the cart state


    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If product exists, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // If product does not exist, add it with a quantity of 1
      product.quantity = 1;
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Show success message
    toast.success(`${product.productName} added to the cart!`, {
      position: 'top-right', // Position of the toast
      autoClose: 2000, // Automatically close after 2 seconds
    });
  };

  return (
    <div className="main-NewArrival">
      <ToastContainer />
      <h1>New Arrivals</h1>
      <div className="NewArrival-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="NewArrival-Card">
            <div className='Position-label'>
              <img src={heart} alt="" style={{ width: "25px", height: "25px" }} className="label" />
            </div>
            <img
              src={product.imgUrl}
              alt={product.productName}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.productName}</h3>
              <p>⭐⭐⭐⭐⭐</p>
              <div className="Bigdicount-Rate-Add">
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
