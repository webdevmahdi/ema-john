import React from 'react'
import logo from '../../images/logo.svg'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className="pages">
                <a href="/order">Order</a>
                <a href="/order-review">Oreder review</a>
                <a href="/manage-inventory">Manage inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    )
}

export default Header