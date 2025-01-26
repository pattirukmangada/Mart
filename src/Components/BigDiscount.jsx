import React from "react";
import { discoutProducts } from './products';
import heart from '../Images/heart.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

const BigDiscount = () => {
  // Handle adding product to the cart and persisting in localStorage
  const handleAddToCart = (product) => {
    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If product exists, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // If product does not exist, add it with a quantity of 1
      product.quantity = 1;
      cart.push(product);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show success toast
    toast.success(`${product.productName} added to the cart!`, {
      position: 'top-right', // Position of the toast
      autoClose: 2000, // Automatically close after 2 seconds
    });
  };

  return (
    <div className="main-Bigdiscount">
      <ToastContainer />
      <h1>Big Discount</h1>
      <section className="Bigdiscount-container">
        {
          discoutProducts.map((disproduct, index) => {
            // const discountedPrice = disproduct.price

            return (
              <div key={index} className="Bigdiscount-card">
                <div className="Discount-header">
                  <div className="Discount-Tag">{disproduct.discount + '% Off'}</div>
                  <img src={heart} alt="Heart Icon" style={{ width: "25px", height: "25px" }} className="label" />
                </div>
                <div className="Bigdiscount-image">
                  <img src={disproduct.imgUrl} alt={disproduct.productName} />
                </div>
                <h3>{disproduct.productName}</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <div className="Bigdicount-Rate-Add">
                  <p>
                    ${disproduct.price}
                  </p>
                  <button onClick={() => handleAddToCart(disproduct)}>+</button>
                </div>
              </div>
            );
          })
        }
      </section>
    </div>
  );
};

export default BigDiscount;
