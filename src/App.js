import './App.css';
import React from 'react';
import bag from './Images/Bag.png'
import user from './Images/user.png'
import cart from './Images/Cart.png'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Carousel from './Components/Carousels';
import Footer from './Components/Footer'
import Banners from './Components/Banners';
function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul className='logo'>
              <img src={bag}></img>
              <h1>Mart</h1>
            </ul>
            <ul className='Link'>
              <li><Link className='links' to="/">Home</Link></li>
              <li><Link className='links' to="/about">Shop</Link></li>
              <li><Link className='links' to="/contact">Cart</Link></li>
              <li><img src={user}></img></li>
              <li><img src={cart}></img></li>
            </ul>
          </nav>
        </div>
    </Router>
    <Carousel />
    <Banners/>
    <Footer/>
    </div>
  );
}

export default App;
