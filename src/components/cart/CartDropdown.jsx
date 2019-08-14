import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../button/CustomButton';

import './cart-dropdown.scss';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const isEmpty = cartItems === undefined || cartItems.length === 0;
    return (
        <div className={`${isEmpty && 'empty'} cart-dropdown`}>
            {isEmpty ? (
                <span className={'cart-items'}>Empty</span>
            ) : (
                <div className={'cart-items'}>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
            )}
            {isEmpty ? (
                <CustomButton onClick={() => <Redirect to='/shop' />}>
                    SHOP NOW
                </CustomButton>
            ) : (
                <CustomButton
                    onClick={() => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }}
                >
                    GO TO CHECKOUT
                </CustomButton>
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
