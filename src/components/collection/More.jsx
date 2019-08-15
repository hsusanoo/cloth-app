import React from 'react';
import { withRouter } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../assets/images/arrow-right-thin.svg';

import './more.scss';

const More = ({ routeName, match, history }) => (
    <div
        className='more'
        onClick={() => history.push(`${match.url}/${routeName}`)}
    >
        <Arrow className='arrow' />
        <span>See more</span>
    </div>
);
export default withRouter(More);
