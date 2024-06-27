// src/pages/Cart.js
i// CartPage.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
    const { cart, getTotalPrice } = useCart();

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.name} - {item.price}
                            </li>
                        ))}
                    </ul>
                    <div>Total Price: ${getTotalPrice().toFixed(2)}</div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
