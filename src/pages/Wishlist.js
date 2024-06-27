
import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';

const WishlistPage = () => {
    const { wishlist } = useWishlist();

    return (
        <div className="wishlist-page">
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty</p>
            ) : (
                <ul>
                    {wishlist.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WishlistPage;
