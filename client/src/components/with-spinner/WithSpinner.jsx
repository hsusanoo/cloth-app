import React from 'react';
import Spinner from './Spinner';

// eslint-disable-next-line react/display-name
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
export default WithSpinner;
