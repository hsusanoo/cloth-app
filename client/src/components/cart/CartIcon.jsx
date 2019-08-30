import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
    CartIconContainer,
    ShoppingIcon,
    ItemCountContainer,
} from './cartIcon.styles';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
