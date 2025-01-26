import React from "react";
import '../App.css'
import Filter from '../Components/BasicExampleButton'
import Footer from "../Components/Footer";
import Productcard from "../Components/Productcard";

const Product=()=>{
    return(
        <div>
            <div className="banner">
               <div className="banner-name">
                 <h2>Product</h2>
               </div>
            </div>
            <Productcard/>
            <Footer/>
        </div>
    )
}
export default Product;

