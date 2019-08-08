import React from 'react';
import PropTypes from 'prop-types';
import './menu-item.scss';

const MenuItem = ({title, imgUrl, size}) =>
    <div
        className={`${size} menu-item`}
    >
        <div className={'item-background'} style={{backgroundImage: `url(${imgUrl})`}}/>
        <div className={'content'}>
            <h1 className={'content-title'}>{title.toUpperCase()}</h1>
            <span className={'content-subtitle'}>SHOP NOW</span>
        </div>
    </div>
;

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    size: '',
};

export default MenuItem;