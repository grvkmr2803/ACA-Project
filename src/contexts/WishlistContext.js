// contexts/WishlistContext.jsx
import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (item) => {
        setWishlist(prevWishlist => {
            if (prevWishlist.some(wishlistItem => wishlistItem.id === item.id)) {
                return prevWishlist.filter(wishlistItem => wishlistItem.id !== item.id);
            } else {
                return [...prevWishlist, item];
            }
        });
    };

    const isInWishlist = (item) => {
        return wishlist.some(wishlistItem => wishlistItem.id === item.id);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
