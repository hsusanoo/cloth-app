import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe/StripeCheckoutButton';

import {
    selectCartItemPriceCount,
    selectCartItems,
} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const Checkout = ({ cartItems, totalPrice }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => (
            <CheckoutItem key={item.name} item={item} />
        ))}
        <div className='total'>
            <span>TOTAL: ${totalPrice}</span>
        </div>
        <div className="payment-warning">
            * Use the following test card for payment <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemPriceCount,
});

export default connect(mapStateToProps)(Checkout);
