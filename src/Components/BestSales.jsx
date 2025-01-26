import React from "react";
import { products } from "./products";
import heart from '../Images/heart.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

// Filter products with 'sofa' category for Best Sales
const BestSale = products.filter((product) => product.category === "sofa");

const BestSales = () => {
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
    <div>
      <ToastContainer />
      <div className="main-Best-Sales">
        <h1>Best Sales</h1>
        <div className="Best-Sales-container">
          {BestSale.map((product) => (
            <div key={product.id} className="Best-Sales-Card">
              <div className="Position-label">
                <img src={heart} alt="" style={{ width: "25px", height: "25px" }} className="label" />
              </div>
              <div className="product-image">
                <img src={product.imgUrl} alt={product.productName} />
              </div>
              <h3>{product.productName}</h3>
              <p>⭐⭐⭐⭐⭐</p>
              <div className="Bigdicount-Rate-Add">
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSales;
