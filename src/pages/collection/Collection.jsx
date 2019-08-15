import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection/CollectionItem';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.scss';

const Collection = ({ collection }) => {
    console.log(collection);
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <hr />
            <div className='items'>
                {items.map((item, index) => (
                    <CollectionItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToPros = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToPros)(Collection);
