import React from 'react';
import Directory from '../../components/directory/Directory';
import './homepage.scss';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <Directory />
            </div>
        );
    }
}
