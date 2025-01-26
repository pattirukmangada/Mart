import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

const Toas = () => {
  // Function to show toast
  const showToast = () => {
    toast.success('Product added to the cart!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Automatically close after 2 seconds
    });
  };

  return (
    <div>
      {/* ToastContainer is required to render the toast */}
      <ToastContainer />
      
      {/* Button to trigger toast */}
      <button onClick={showToast} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default Toas;
