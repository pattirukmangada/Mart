import React from "react";
import { serviceData } from "./products";
import '../App.css'

const Card = ()=>{
    return(
        <div>
            <section className="Card-Container">
                {
                    serviceData.map((service,index)=>(
                        <div key={index} style={{background:service.bg}} className="Card">
                            <div className="Card-image">
                                <img src={service.icon} alt="" />
                            </div>
                            <div className="Card-Title">
                                {service.title}
                            </div>
                            <div className="Card-Subtitle">
                                {service.subtitle}
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}
export default Card;