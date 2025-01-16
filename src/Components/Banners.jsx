import React from 'react'
import delivery from '../Images/delivery.gif'
import payment from '../Images/debit-card.gif'
import secure from '../Images/secure.gif'
import cash from '../Images/receive-cash.gif'

export default function Banners() 
{
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '.' : text;
      };
    const box1={
        backgroundColor:'#F5E4BD',
        width:'250px',
        height:'170px'
    }
    const box2={
        backgroundColor:'#A6D9D2',
        width:'250px',
        height:'170px'
    }
    const box3={
        backgroundColor:'#DFE499',
        width:'250px',
        height:'170px'
    }
    const box4={
        backgroundColor:'#BEDCF4',
        width:'250px',
        height:'170px'
    }

  return (
    <div className='Card-container'>
        <div className='Card' style={box1}>
            <img src={delivery}></img>
            <h5>Free Shipping</h5>
            <p>{truncateText("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus placeat eligendi labore iure odit, obcaecati ea debitis eos sapiente rerum distinctio aliquid delectus aliquam molestiae ipsa facilis repellat et praesentium.",20)}</p>
        </div>
        <div className='Card' style={box2}>
            <img src={payment}></img>
            <h5>Safe Payment</h5>
            <p>{truncateText("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus placeat eligendi labore iure odit, obcaecati ea debitis eos sapiente rerum distinctio aliquid delectus aliquam molestiae ipsa facilis repellat et praesentium.",20)}</p>
        </div>
        <div className='Card' style={box3}>
            <img src={secure}></img>
            <h5>Secure Payment</h5>
            <p>{truncateText("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus placeat eligendi labore iure odit, obcaecati ea debitis eos sapiente rerum distinctio aliquid delectus aliquam molestiae ipsa facilis repellat et praesentium.",20)}</p>
        </div>
        <div className='Card' style={box4}>
            <img src={cash}></img>
            <h5>Back Guarantee</h5>
            <p>{truncateText("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus placeat eligendi labore iure odit, obcaecati ea debitis eos sapiente rerum distinctio aliquid delectus aliquam molestiae ipsa facilis repellat et praesentium.",20)}</p>
        </div>
    </div>
  )
}
