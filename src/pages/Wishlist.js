import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import './whishlist.css';

const WishlistPage = () => {
    const { wishlist, addToWishlist } = useWishlist();
    const { addToCart } = useCart();

    const isInWishlist = (item) => wishlist && wishlist.some(wishlistItem => wishlistItem.id === item.id);

    return (
        <div className="left-content2">
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty</p>
            ) : (
                wishlist.map((item, index) => (
                    
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
                                <p style={{fontSize:'13px'}}>⭐⭐⭐⭐⭐</p>
                                <a href="#" onClick={() => addToCart(item)}>
                                    Add to cart
                                </a>
                            </div>
                            <div className='chassu2'>
                                <h3>{item.name}</h3>
                            </div>
                            <div className='chassu3'>
                                <p className="price2">{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default WishlistPage;
