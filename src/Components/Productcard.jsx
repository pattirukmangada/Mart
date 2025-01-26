import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicExampleButton from './BasicExampleButton';
import { products } from './products';
import heart from '../Images/heart.png';
import { useNavigate } from 'react-router-dom';

const Productcard = () => {
  const [selectedCategory, setSelectedCategory] = useState('sofa');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    selectedCategory === 'all' ? true : product.category === selectedCategory
  );

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`${product.productName} added to the cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleDecrement = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      let updatedCart;
      if (existingProduct.quantity > 1) {
        updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        updatedCart = cart.filter((item) => item.id !== product.id);
      }

      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.info(`${product.productName} quantity updated!`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const goToCartPage = () => {
    navigate('/cart');
  };

  return (
    <div>
      <ToastContainer />
      <BasicExampleButton setSelectedCategory={setSelectedCategory} />

      <div className="Best-Sales-container" style={{ backgroundColor: 'rgb(184, 184, 176)', paddingTop: '100px' }}>
        {filteredProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div key={product.id} className="Product-card">
              <div className="Position-label">
                <img src={heart} alt="" style={{ width: '25px', height: '25px' }} className="label" />
              </div>
              <div className="product-image">
                <img src={product.imgUrl} alt={product.productName} />
              </div>
              <h3 style={{ fontSize: '20px' }}>{product.productName}</h3>
              <p>⭐⭐⭐⭐⭐</p>
              <div className="Bigdicount-Rate-Add">
                <p>${product.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleAddToCart(product)}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productcard;
