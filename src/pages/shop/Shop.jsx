import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection/CollectionsOverview';
import Collection from '../collection/Collection';

const Shop = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
);

export default Shop;
