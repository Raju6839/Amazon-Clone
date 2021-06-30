import React from 'react'
import './Product.css'
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import { useStateValue } from './StateProvider';
function Product({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
    //console.log(basket);
    const addTOBasket=()=>{
        // dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p classname="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <div>
                    <img  className="product__img" src={image}></img>
                </div>
                <button onClick={addTOBasket} className="btn">Add to Basket</button>
            </div>
        </div>
    )
}
export default Product
