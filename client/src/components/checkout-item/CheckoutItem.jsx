import React from 'react';
import { connect } from 'react-redux';

import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    StyledArrow,
    StyledImage,
    StyledName,
    StyledPrice,
    StyledQuantity,
    RemoveButtonContainer,
    StyledRemoveButton,
} from './checkoutItem.styles';

const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <StyledImage src={imageUrl} alt='item' />
            </ImageContainer>
            <StyledName>{name}</StyledName>
            <StyledQuantity>
                {quantity === 1 ? (
                    <StyledArrow inactive>&#10094;</StyledArrow>
                ) : (
                    <StyledArrow onClick={() => removeItem(item)}>
                        &#10094;
                    </StyledArrow>
                )}
                {quantity}
                <StyledArrow onClick={() => addItem(item)}>
                    &#10095;
                </StyledArrow>
            </StyledQuantity>
            <StyledPrice>${price}</StyledPrice>
            <RemoveButtonContainer>
                <StyledRemoveButton onClick={() => clearItem(item)}>
                    &#10005;
                </StyledRemoveButton>
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
