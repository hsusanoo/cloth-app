import React from 'react';
import Collection from '../../components/collection/Collection';
import SHOP_DATA from './shop.data';

export default class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.collections.map(({ ...collectionProps }, index) => (
                    <Collection key={index} {...collectionProps} />
                ))}
            </div>
        );
    }
}
