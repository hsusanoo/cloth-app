import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    StyledContent,
    StyledItemBackground,
    StyledContentSubtitle,
    StyledContentTitle,
} from './menuItem.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
    <MenuItemContainer
        className={`${size}`}
        onClick={() => history.push(`${match.url}shop/${linkUrl}`)}
    >
        <StyledItemBackground style={{ backgroundImage: `url(${imageUrl})` }} />
        <StyledContent>
            <StyledContentTitle>{title.toUpperCase()}</StyledContentTitle>
            <StyledContentSubtitle>SHOP NOW</StyledContentSubtitle>
        </StyledContent>
    </MenuItemContainer>
);

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    size: '',
};

export default withRouter(MenuItem);
