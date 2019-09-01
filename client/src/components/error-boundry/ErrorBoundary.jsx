import React from 'react';

import {
    ErrorImageContainer,
    ErrorImageOverlay,
    ErrorImageText,
} from './ErrorBoundary.styles';

export default class ErrorBoundary extends React.Component {
    state = {
        hasErrored: false,
    };

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        return this.state.hasErrored ? (
            <ErrorImageOverlay>
                <ErrorImageContainer />
                <ErrorImageText>Whoops... Something went wrong</ErrorImageText>
            </ErrorImageOverlay>
        ) : (
            this.props.children
        );
    }
}
