// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WishlistProvider } from '../src/contexts/WishlistContext';
import { CartProvider } from '../src/contexts/CartContext';
import Home from '../src/pages/Home';
import Shop from '../src/pages/Shop';
import WishlistPage from './pages/Wishlist';
import CartPage from './pages/Cart';
import Navbar from './Components/Navbar';

const App = () => {
    return (
        <WishlistProvider>
            <CartProvider>
                <Router>
                  <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/wishlist" element={<WishlistPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </Router>
            </CartProvider>
        </WishlistProvider>
    );
}

export default App;
