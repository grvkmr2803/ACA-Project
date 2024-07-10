import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="navbar">
      <div className="icons">
        <div className="icon1">
          <Link className="active" to="/"><i className="fa-solid fa-house fa-lg"></i></Link>
        </div>
        <div className="icon1">
          <Link className="active" to="/shop"><i className="fa-solid fa-bag-shopping fa-lg"></i></Link>
        </div>
        <div className="icon1">
          <Link className="active" to="/cart"><i className="fa-solid fa-cart-shopping fa-lg"></i></Link>
        </div>
        <div className="icon1">
          <Link className="active" to="/wishlist"><i className="fa-solid fa-heart fa-lg"></i></Link>
        </div>
        <div className="icons2">
          {currentUser ? (
            <>
              <div className="icon1" onClick={logout}>
                <i className="fa-solid fa-power-off fa-lg" style={{ color: '#f7f9fc', rotate: '270deg' }}></i>
              </div>
            </>
          ) : (
            <>
              <div className="icon1">
                <Link className="active" to="/login"><i className="fa-solid fa-sign-in fa-lg" style={{ color: '#f7f9fc' }}></i></Link>
              </div>
              <div className="icon1">
                <Link className="active" to="/signup"><i className="fa-solid fa-user-plus fa-lg" style={{ color: '#f7f9fc' }}></i></Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
