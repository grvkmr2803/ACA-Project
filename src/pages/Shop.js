// Shop.jsx
import React, { useState } from 'react';
import './Shop.css';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';

const Shop = () => {
    const { wishlist, addToWishlist } = useWishlist();
    const { addToCart } = useCart();

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const items = [
        {
            id: 1,
            name: 'Macbook Pro',
            price: '$100.07',
            image: '../mac.webp',
            brand: 'Apple',
            category: 'Laptops',
        },
        {
            id: 2,
            name: 'Dell Inspiron touch',
            price: '$50.07',
            image: '../dell.avif',
            brand: 'Dell',
            category: 'Laptops',
        },
        {
            id: 3,
            name: 'iPhone 12',
            price: '$999.99',
            image: '../iphone12.jpg',
            brand: 'Apple',
            category: 'Phone',
        }
    ];

   
    const isInWishlist = (item) => wishlist && wishlist.name === item.name;

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setSelectedCategories(prevSelectedCategories =>
            prevSelectedCategories.includes(value)
                ? prevSelectedCategories.filter(category => category !== value)
                : [...prevSelectedCategories, value]
        );
    };

    const handleBrandChange = (event) => {
        const value = event.target.value;
        setSelectedBrands(prevSelectedBrands =>
            prevSelectedBrands.includes(value)
                ? prevSelectedBrands.filter(brand => brand !== value)
                : [...prevSelectedBrands, value]
        );
    };

    const filteredItems = items.filter(item =>
        (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    );

    return (
        <div className="content">
            <div className="c1">
                <div className="filter-section">
                    <div className="f1">
                        <h2>Filter by Categories</h2>
                    </div>
                    <div className="filter-group">
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Phone"
                                    onChange={handleCategoryChange}
                                /> Phone
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Clothes"
                                    onChange={handleCategoryChange}
                                /> Clothes
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Laptops"
                                    onChange={handleCategoryChange}
                                /> Laptops
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Earpods"
                                    onChange={handleCategoryChange}
                                /> Earpods
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Drones"
                                    onChange={handleCategoryChange}
                                /> Drones
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Shoes"
                                    onChange={handleCategoryChange}
                                /> Shoes
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Tablets"
                                    onChange={handleCategoryChange}
                                /> Tablets
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="category"
                                    value="Cameras"
                                    onChange={handleCategoryChange}
                                /> Cameras
                            </label>
                        </div>
                    </div>
                    <div className="f1">
                        <h2>Filter by Brands</h2>
                    </div>
                    <div className="filter-group">
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Apple"
                                    onChange={handleBrandChange}
                                /> Apple
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Dell"
                                    onChange={handleBrandChange}
                                /> Dell
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Samsung"
                                    onChange={handleBrandChange}
                                /> Samsung
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Option 4"
                                    onChange={handleBrandChange}
                                /> Option 4
                            </label>
                        </div>
                        <div className="f2">
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="Option 5"
                                    onChange={handleBrandChange}
                                /> Option 5
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="r1">
                <div className="no">{filteredItems.length} Products</div>
                <div className="grid-container">
                    {filteredItems.map(item => (
                        <div className="grid-item" key={item.id}>
                            <div className="a1">
                                <img src={item.image} alt={item.name} />
                                <div className="icon4" onClick={() => addToWishlist(item)}>
                                    <i className={`fa-${isInWishlist(item) ? 'solid' : 'regular'} fa-heart fa-lg`}></i>
                                </div>
                                <div className="brand">{item.brand}</div>
                            </div>
                            <div className="d1">
                                <div className="info">
                                    <h6>{item.name}</h6>
                                    <div style={{ fontSize: '16px', paddingBottom: '13px', paddingTop: '5px' }}>nice product...</div>
                                    <div className="read">Read More
                                        <i className="fa-solid fa-right-long" style={{ paddingTop: '3px' }}></i>
                                    </div>
                                </div>
                                <div className="info2">
                                    <h6 className="price" style={{ color: 'pink', paddingBottom: '35px' }}>{item.price}</h6>
                                    <div className="icon3" onClick={() => addToCart(item)}>
                                        <i className="fa-solid fa-cart-shopping fa-xs"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;
