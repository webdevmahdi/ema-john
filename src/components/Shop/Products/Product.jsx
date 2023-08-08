import React from 'react'
import './Product.css'

function Product(props) {   
    let { name, price, ratings, img, seller } = props.product;
    let shortName = name.slice(0, 18);

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>Name: {shortName}</h3>
                <strong>Price: ${price}</strong>
                <p>Seller: {seller}</p>
                <b>Ratings: {ratings} stars</b>
            </div>
            <button onClick={()=> props.addToCart(props.product)} className="btn">
                <p>Add to cart</p>
            </button>
        </div>
    )
}

export default Product