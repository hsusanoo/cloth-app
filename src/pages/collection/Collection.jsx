import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection/CollectionItem';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
    CollectionContainer,
    ItemsContainer,
    StyledHr,
    StyledTitle,
} from './collection.styles';

const Collection = ({ collection }) => {
    console.log(collection);
    const { title, items } = collection;
    return (
        <CollectionContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledHr />
            <ItemsContainer>
                {items.map((item, index) => (
                    <CollectionItem key={index} item={item} />
                ))}
            </ItemsContainer>
        </CollectionContainer>
    );
};

const mapStateToPros = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToPros)(Collection);
