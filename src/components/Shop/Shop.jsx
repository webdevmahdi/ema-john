import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from './Products/Product'
import Cart from '../Cart/Cart';

function Shop() {
    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    });
    let addToCart =(product) => {
        let updatedCart = [...cart, product];
        setCart(updatedCart);
    }
    return (
        <div className='shop-container'>
        <div className='product-container'>
            {
                products.map(product => <Product 
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                    ></Product>)
            }
        </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop