import React from 'react';

import { CustomButtonContainer } from './customButton.styles';

const CustomButton = ({ children, className, ...props }) => (
    <CustomButtonContainer className={className} {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;
