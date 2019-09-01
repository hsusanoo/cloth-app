import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.seletors';
import ErrorBoundary from '../error-boundry/ErrorBoundary';
import Header from '../header/Header';
import Spinner from '../with-spinner/Spinner';

import './App.css';

const HomePage = lazy(() => import('../../pages/homepage/HomePage'));
const Shop = lazy(() => import('../../pages/shop/Shop'));
const Checkout = lazy(() => import('../../pages/checkout/Checkout'));
const Register = lazy(() => import('../../pages/register/Register'));

const App = ({ checkUserSession, user }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={Shop} />
                        <Route
                            path='/register'
                            render={() =>
                                user ? <Redirect to='/' /> : <Register />
                            }
                        />
                        <Route exact path='/checkout' component={Checkout} />
                    </Suspense>
                </ErrorBoundary>
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
