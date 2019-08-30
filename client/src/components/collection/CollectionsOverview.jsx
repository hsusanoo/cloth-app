import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsArray } from '../../redux/shop/shop.selectors';

import Collection from './Collection';

import { CollectionsContainer } from './collectionsOverview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsContainer>
        {collections.map(({ ...collectionProps }, index) => (
            <Collection key={index} {...collectionProps} />
        ))}
    </CollectionsContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
