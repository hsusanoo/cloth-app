import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, isGoogle, ...others}) =>
    <button className={`${isGoogle && 'google-sign-in'} button`} {...others}>
        {children}
    </button>
;

export default CustomButton;