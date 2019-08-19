import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
    ItemImageContainer,
    CollectionItemContainer,
    ItemFooterContainer,
    ItemNameContainer,
    ItemPriceContainer,
    CustomButtonContainer,
} from './collectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <ItemImageContainer image={imageUrl} />
            <ItemFooterContainer>
                <ItemNameContainer>{name}</ItemNameContainer>
                <ItemPriceContainer>${price}</ItemPriceContainer>
            </ItemFooterContainer>
            <CustomButtonContainer onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButtonContainer>
        </CollectionItemContainer>
    );
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
