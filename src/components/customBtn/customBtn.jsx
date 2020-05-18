import React from 'react';
import './customBtn.styles.scss';

const CustomBtn = ({ children, isGoogleBtn, ...otherProps }) => {
    return ( 
        <button className={`${ isGoogleBtn ? 'google-btn' : ''} custom-btn`} { ...otherProps }>
            { children }
        </button>
    );
}
 
export default CustomBtn;