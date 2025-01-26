import React from 'react'
import '../App.css'
import icon from '../Images/mart white.png'
export default function Footer() {
  return (
    <div>
        <div className='Container'>
            <div className='footer-logo'> 
                <h2><img src={icon}></img>Mart</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorum ut vitae accusantium excepturi in quam eos suscipit atque consectetur ipsum quasi non labore praesentium distinctio officia impedit. Debitis, temporibus.</p>
            </div>
            <div className='footer-heading'>
                <h2>About Us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Career</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-heading'>
                <h2>
                    Customer Care
                </h2>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>
            <div className='footer-heading' style={{width:"300px"}}>
                <h2>
                    Contact Us
                </h2>
                <ul>
                    <li>
                            70 Washington Square South,
                    </li>
                    <li>
                        New York, NY 10012 United States.
                    </li>
                    <li>
                        Email: <a href='mailto:pattirukmangada2002@gmail.com'>pattirukmangada2002@gmail.com</a>
                    </li>
                    <li>
                        Phone: <a href='tel:+9515692040'>+91 9515692040</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
