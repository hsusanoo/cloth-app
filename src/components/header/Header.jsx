import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/images/crown.svg';
import './header.scss';

const Header = () =>
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
        </div>
    </div>
;

export default Header;