import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,rating,price,title}) {
    const [{basket},dispatch]=useStateValue();
    
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    } 

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill().map(()=>(
                        <p>⭐</p>
                    ))
                    }
                    
                </div>

                <button onClick={removeFromBasket}className="btn">Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
