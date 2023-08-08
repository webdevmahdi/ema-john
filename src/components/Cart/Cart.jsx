import React from 'react'

function Cart({cart}) {
    return (
        <div>
            <h1>Order samary</h1>
            <p className="cart-items">Cart items: {cart.length}</p>
        </div>
    )
}

export default Cart