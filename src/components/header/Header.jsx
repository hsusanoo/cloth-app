import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';

import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import { auth } from '../../utils/firebase.utils';

import './header.scss';
import { selectCurrentUser } from '../../redux/user/user.seletors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ user, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='nav'>
            <Link to='/shop' className='nav-item'>
                SHOP
            </Link>
            <Link to='/contact' className='nav-item'>
                CONTACT
            </Link>
            {user ? (
                <div className='nav-item' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link to='/register' className='nav-item'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    // state is automatically passed to selector functions
    user: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
