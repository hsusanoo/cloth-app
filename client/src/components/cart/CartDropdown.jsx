import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from './CartItem';

import {
    CustomButtonContainer,
    CartItemsContainer,
    CartDropdownContainer,
} from './cartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const isEmpty = cartItems === undefined || cartItems.length === 0;
    return (
        <CartDropdownContainer>
            {isEmpty ? (
                <CartItemsContainer as={'span'}>Empty</CartItemsContainer>
            ) : (
                <CartItemsContainer>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </CartItemsContainer>
            )}
            {isEmpty ? (
                <CustomButtonContainer onClick={() => <Redirect to='/shop' />}>
                    SHOP NOW
                </CustomButtonContainer>
            ) : (
                <CustomButtonContainer
                    onClick={() => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }}
                >
                    GO TO CHECKOUT
                </CustomButtonContainer>
            )}
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
