import React from 'react'

import './cart-dropdown-item.styles.scss'

function CartItem(item) {
    const {name, price, imageUrl, quantity} = item.item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} X ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem
