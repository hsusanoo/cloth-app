import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe/StripeCheckoutButton';

import {
    selectCartItemPriceCount,
    selectCartItems,
} from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlock,
    Notice,
    Total,
} from './checkout.styles';

const Checkout = ({ cartItems, totalPrice }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map(item => (
            <CheckoutItem key={item.name} item={item} />
        ))}
        <Total>
            <span>TOTAL: ${totalPrice}</span>
        </Total>
        <Notice>
            * Use the following test card for payment <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </Notice>
        <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemPriceCount,
});

export default connect(mapStateToProps)(Checkout);
