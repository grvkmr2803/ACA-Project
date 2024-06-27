// Home.jsx
// Home.jsx
import React, { useContext, useState, useEffect } from 'react';
import './Home.css';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Link, Route, Routes } from 'react-router-dom';
import WishlistPage from './Wishlist';
import CartPage from './Cart';
import macbookImage from '../images/616ee4216d106506511d79e00132fe0b.jpg';
import dslrImage from '../images/Sigma-24mm-1.webp';
import ipadImage from '../images/maxresdefault.jpg';
import earpodsImage from '../images/OIP.jpeg';

const Home = () => {
    const { wishlist, addToWishlist, isInWishlist } = useWishlist();
    const { addToCart, getTotalPrice } = useCart();
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            id: 1,
            name: 'Macbook',
            price: '$1200',
            image: macbookImage,
            brand: 'Apple'
        },
        {
            id: 2,
            name: 'DSLR',
            price: '$120',
            image: dslrImage,
            brand: 'Canon'
        },
        {
            id: 3,
            name: 'iPad',
            price: '$324',
            image: ipadImage,
            brand: 'Apple'
        },
        {
            id: 4,
            name: 'Sketchers',
            price: '$129',
            image: earpodsImage,
            brand: 'Sketchers'
        }
    ];

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const interval = setInterval(nextItem, 4000); // Change item every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const currentItem = items[currentIndex];

    return (
        <div className="content">
            <div className='r11'>
                <div className="left-content">
                    {items.map((item, index) => (
                        <div className="image-boxes" key={index}>
                            <div className="image-container">
                                <img src={item.image} alt={item.name} />
                                <i
                                    className={`fa-${isInWishlist(item) ? 'solid' : 'regular'} fa-heart heart-icon`}
                                    onClick={() => addToWishlist(item)}
                                ></i>
                            </div>
                            <h3>{item.name}</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p className="brand-name">{item.brand}</p>
                            <p className="price">{item.price}</p>
                            <a href="#" onClick={() => addToCart(item)}>
                                <i className="fa-solid fa-cart-shopping fa-lg"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='r2'>
                <div className='anu2'>
                    <div className='anu3'>
                        <div className="left-arrow" onClick={prevItem}>
                            <i className="fa-solid fa-circle-left fa-lg" style={{ cursor: 'pointer' }}></i>
                        </div>
                    </div>
                    <div className='anu4'>
                        <div className="right-content">
                            <div className="image-boxes">
                                <div className="image-container">
                                    <img src={currentItem.image} alt={currentItem.name} />
                                    <i
                                        className={`fa-${isInWishlist(currentItem) ? 'solid' : 'regular'} fa-heart heart-icon`}
                                        onClick={() => addToWishlist(currentItem)}
                                    ></i>
                                </div>
                                <h3>{currentItem.name}</h3>
                                <p>⭐⭐⭐⭐⭐</p>
                                <p className="brand-name">{currentItem.brand}</p>
                                <p className="price">{currentItem.price}</p>
                                <a href="#" onClick={() => addToCart(currentItem)}>
                                    <i className="fa-solid fa-cart-shopping fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='anu2'>
                        <div className="right-arrow" onClick={nextItem}>
                            <i className="fa-solid fa-circle-right fa-lg" style={{ cursor: 'pointer' }}></i>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
};

export default Home;
