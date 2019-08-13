import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/images/crown.svg';

import {connect} from "react-redux";

import {auth} from "../../utils/firebase.utils";

import './header.scss';

const Header = ({user}) =>
    <div className={'header'}>
        <Link to={'/'} className={'logo-container'}>
            <Logo className={'logo'}/>
        </Link>
        <div className={'nav'}>
            <Link to={'/shop'} className={'nav-item'}>
                SHOP
            </Link>
            <Link to={'/contact'} className={'nav-item'}>
                CONTACT
            </Link>
            {
                user
                    ? <div className={'nav-item'} onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link to={'/register'} className={'nav-item'}>SIGN IN</Link>
            }
        </div>
    </div>
;

const mapStateToProps = state => ({ // state === Redux store state
    user: state.user.user,
});

export default connect(mapStateToProps)(Header);