import React, { useContext } from 'react';
import { useCart } from '../contexts/CartContext';
import './cart.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (item, quantity) => {
        updateQuantity(item.id, quantity);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart-container">
          
            <div className="cart-items">
            <div><h1>Shopping Cart</h1></div>
                {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-details">
                            <p>{item.name}</p>
                            <p>{item.brand}</p>
                            <p>${item.price}</p>
                        </div>
                        <div className="cart-item-quantity">
                            <select
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item, e.target.value)}
                            >
                                {[...Array(10).keys()].map(x => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="cart-item-delete">
                            <button onClick={() => removeFromCart(item.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Summary</h3>
                <p>Items: {totalItems}</p>
                <p>Total Price: ${totalPrice}</p>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
