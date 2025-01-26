import React from "react";
import { Link } from "react-router-dom";
import Product from './Product'
import Carousel from '../Components/Carousels';
import Card from '../Components/Card'
import BigDiscount from '../Components/BigDiscount';
import NewArrival from '../Components/NewArrivals'
import BestSales from '../Components/BestSales';
import Footer from '../Components/Footer'


const Home=()=>{
    return(
        <div>
        <Carousel />
        <Card />
        <BigDiscount />
        <NewArrival/>
        <BestSales/>
        <Footer/>
        </div>
    )
}
export default Home;