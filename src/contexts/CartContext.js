// contexts/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            if (prevCart.some(cartItem => cartItem.id === item.id)) {
                return prevCart;
            } else {
                return [...prevCart, item];
            }
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
