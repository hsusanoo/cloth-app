import React from 'react';

import {
    CartItemContainer,
    ItemDetailsContainer,
    ItemImageContainer,
} from './cartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ItemImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
                {quantity} x $ {price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
