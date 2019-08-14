import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='item-background'
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className='content'>
            <h1 className='content-title'>{title.toUpperCase()}</h1>
            <span className='content-subtitle'>SHOP NOW</span>
        </div>
    </div>
);

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    size: '',
};

export default withRouter(MenuItem);
