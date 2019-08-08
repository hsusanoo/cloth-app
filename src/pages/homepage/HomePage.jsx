import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/Directory';

export default class HomePage extends React.Component {

    render() {
        return (
            <div className={'homepage'}>
                <Directory/>
            </div>
        );
    }
}
