import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import bag from './Images/mart Black.png';
import user from './Images/user.png';
import cart from './Images/cart.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'; // Ensure the Home component exists and is properly exported
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Pages/Product'
import Cart from './Pages/Cart'


const App = () => {
  return (
    <div>
      <Router>
        {/* Navigation Bar */}
        <nav>
          <ul className="logo">
            <img src={bag} alt="Mart Logo" />
            <h1>Mart</h1>
          </ul>
          <ul className="Link">
            {/* Add navigation links */}
            <li><Link className="links" to="/">Home</Link></li>
            <li><Link className="links" to="Shop">Shop</Link></li>
            <li><Link className="links" to="Cart">Cart</Link></li>
            <li><img src={user} alt="User Icon" /></li>
            <li><Link className='links' to="/Cart"><img src={cart} alt="Cart Icon" /></Link></li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          {/* Add more routes as needed */}
          {/* Example: <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
