import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './header.styles.scss';

const Header = () => {
    return ( 
        <nav className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>                
                <Link to="/signin">SignIn</Link> 
            </div>
        </nav>
    );
}
    
export default Header;