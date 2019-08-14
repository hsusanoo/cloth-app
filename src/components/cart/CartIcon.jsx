import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import './cart-icon.scss';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemsCount}</span>
    </div>
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
