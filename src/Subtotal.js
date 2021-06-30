import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'; 
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
//import {calculateItems} from './reducer'
function Subtotal() {
    const history=useHistory();
    const [{basket},dispatch]=useStateValue();
    const calculateItems=(basket)=>{
        var sum=0;
        for(var i=0;i<basket.length;i++)
        {
            sum+=basket[i].price;
        }
        return sum;
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={calculateItems(basket)}  /* homework*/
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
            />

            <button onClick={e=>history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
    