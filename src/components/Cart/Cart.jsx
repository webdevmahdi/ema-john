import React from 'react'
import './Cart.css'

function Cart(props) {
    let {cart} = props;
    let total = 0;
    let shipping = 0;
    for(let product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let taxNum = parseFloat(tax);
    let totalCost = total + taxNum + shipping;
    return (
        <div className='cart'>
            <h1>Order samary</h1>
            <p className="cart-items">Cart items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Shiping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand total: ${totalCost}</h3>
        </div>
    )
}

export default Cart