import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

// eslint-disable-next-line react/display-name
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
    isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
export default WithSpinner;
