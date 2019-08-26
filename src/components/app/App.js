import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Checkout from '../../pages/checkout/Checkout';
import { HomePage } from '../../pages/homepage';
import Register from '../../pages/register/Register';
import { Shop } from '../../pages/shop';
import { selectCurrentUser } from '../../redux/user/user.seletors';
import Header from '../header/Header';
import { checkUserSession } from '../../redux/user/user.actions';

import './App.css';

const App = ({ checkUserSession, user }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={Shop} />
                <Route
                    path='/register'
                    render={() => (user ? <Redirect to='/' /> : <Register />)}
                />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
