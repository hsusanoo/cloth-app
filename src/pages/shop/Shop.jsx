import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collection from '../../components/collection/Collection';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const Shop = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ ...collectionProps }, index) => (
            <Collection key={index} {...collectionProps} />
        ))}
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
});

export default connect(mapStateToProps)(Shop);
