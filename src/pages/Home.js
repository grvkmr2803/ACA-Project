
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
import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook';

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
            brand: 'Apple',
            quantity: 'Qauntity: 9'
        },
        {
            id: 2,
            name: 'DSLR',
            price: '$120',
            image: dslrImage,
            brand: 'Canon',
            quantity: 'Qauntity: 20'
        },
        {
            id: 3,
            name: 'iPad',
            price: '$324',
            image: ipadImage,
            brand: 'Apple',
            quantity: 'Qauntity: 69'
        },
        {
            id: 4,
            name: 'Sketchers',
            price: '$129',
            image: earpodsImage,
            brand: 'Sketchers',
            quantity: 'Qauntity: 90'
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
        <div className='peter'>
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
                                <i className="fa-solid fa-cart-shopping " style={{color: '#787878'}}></i>
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
                           
                                <div className="image-container3">
                                    
                                    <img src={currentItem.image} alt={currentItem.name} style={{width: '100%',height:'100%'}}/>
                                   
                                   
                                </div>
                                <div className='g1'>
                                    <div className='g2'> 
                                    <h3>{currentItem.name}</h3>
                                          <p className="price">{currentItem.price}</p>
                                </div>
                               <div className='g4'>
                                <p className="brand-name">Brand: {currentItem.brand}</p>
                                <p>⭐⭐⭐⭐⭐</p>
                                <p className="quantity">{currentItem.quantity}</p>
                               
                               
                                <a href="#" onClick={() => addToCart(currentItem)}>
                                    <i className="fa-solid fa-cart-shopping " style={{color: '#787878'}}></i>
                                </a>
                                </div>
                                </div>
                           
                        </div>
                    </div>
                    <div className='anu3'>
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
        <div className='content2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className='masti'>
        <h2 style={{color:'rgb(240, 15, 188)', textAlign: 'center'}}>Welcome to our e-commerce platform!<br/>
        <span style={{color: 'black'}}> Explore a diverse selection of high-quality products and exclusive deals tailored to your needs. Enjoy a seamless shopping experience with us.</span>
        </h2>
    </div>
</div>


        <div className='content3'>
           <div className='special'>
            <div style={{fontSize:'40px'}}>SPECIAL PRODUCTS</div>
            <div></div>
           </div>
            <div className="left-content2">
                    {items.map((item, index) => (
                        <div className="image-boxes2" key={index}>
                            <div className="image-container2">
                                <img src={item.image} alt={item.name} />
                                <i
                                    className={`fa-${isInWishlist(item) ? 'solid' : 'regular'} fa-heart heart-icon`}
                                    onClick={() => addToWishlist(item)}
                                ></i>
                            </div>
                            <div className='ress'>
                               
                                <div className='chassu1'>  
                                    <p className="brand-name2">{item.brand}</p>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <a href="#" onClick={() => addToCart(item)}>
                               Add to cart
                            </a>
                                </div>
                                <div className='chassu2'>
                                    <h3>{item.name}</h3>
                                    </div>
                                <div className='chassu3'> <p className="price2">{item.price}</p></div>
                           
                          
                           
                           
                            </div>
                        </div>
                    ))}
                </div>

        </div>
        </div>
    );
};

export default Home;
