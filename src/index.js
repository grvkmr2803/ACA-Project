import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <WishlistProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </WishlistProvider>
  </React.StrictMode>
);
