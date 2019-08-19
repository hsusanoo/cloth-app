import React from 'react';

import Directory from '../../components/directory/Directory';

import { HomePageContainer } from './homepage.styles';

export default class HomePage extends React.Component {
    render() {
        return (
            <HomePageContainer>
                <Directory />
            </HomePageContainer>
        );
    }
}
