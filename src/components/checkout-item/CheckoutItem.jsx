import React from 'react';
import { connect } from 'react-redux';
import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.scss';

const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                {quantity === 1 ? (
                    <span className='inactive'>&#10094;</span>
                ) : (
                    <span onClick={() => removeItem(item)}>&#10094;</span>
                )}
                {quantity}
                <span onClick={() => addItem(item)}>&#10095;</span>
            </div>
            <span className='price'>${price}</span>
            <div className='remove-button'>
                <span className='remove' onClick={() => clearItem(item)}>
                    &#10005;
                </span>
            </div>
        </div>
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
