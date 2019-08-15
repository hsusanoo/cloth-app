import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsArray } from '../../redux/shop/shop.selectors';

import Collection from './Collection';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ ...collectionProps }, index) => (
            <Collection key={index} {...collectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
