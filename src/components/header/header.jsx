import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return ( 
        <nav className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>      
                { currentUser 
                    ? <div onClick={ () => auth.signOut() }>Sign Out</div>
                    : <Link to="/signin">Sign In</Link>
                }          
                 
            </div>
        </nav>
    );
}
    
export default Header;