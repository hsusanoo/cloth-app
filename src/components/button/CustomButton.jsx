import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogle, inverted, ...others }) => (
    <button
        className={`${inverted && 'inverted'} ${isGoogle &&
            'google-sign-in'} button`}
        {...others}
    >
        {children}
    </button>
);

export default CustomButton;
