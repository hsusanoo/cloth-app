import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";

import CustomButton from '../button/CustomButton';
import CartItem from './CartItem';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => {
    const isEmpty = cartItems === undefined || cartItems.length === 0;
    return (
        <div className={`${isEmpty && 'empty'} cart-dropdown`}>
            {isEmpty
                ? <h3 className={'cart-items'}>Empty</h3>
                : <div className={'cart-items'}>
                    {
                        cartItems.map((item, index) => <CartItem key={index} item={item}/>)
                    }
                </div>
            }
            {
                isEmpty
                    ? <CustomButton onClick={() => <Redirect to={'/shop'}/>}>SHOP NOW</CustomButton>
                    : <CustomButton>GO TO CHECKOUT</CustomButton>
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);