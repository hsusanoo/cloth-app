import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.seletors';

import { auth } from '../../utils/firebase.utils';
import CartDropdown from '../cart/CartDropdown';
import CartIcon from '../cart/CartIcon';

import {
    HeaderContainer,
    LogoContainer,
    Logo,
    NavContainer,
    NavItemLink,
} from './header.styles';

const Header = ({ user, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <NavContainer>
            <NavItemLink to='/shop'>SHOP</NavItemLink>
            <NavItemLink to='/contact'>CONTACT</NavItemLink>
            {user ? (
                <NavItemLink as={'div'} onClick={() => auth.signOut()}>
                    SIGN OUT
                </NavItemLink>
            ) : (
                <NavItemLink to='/register'>SIGN IN</NavItemLink>
            )}
            <CartIcon />
        </NavContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    // state is automatically passed to selector functions
    user: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
