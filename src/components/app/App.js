import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {setUser} from "../../redux/user/user.actions";

import {HomePage} from '../../pages/homepage';
import {Shop} from '../../pages/shop';
import Header from '../../components/header/Header';
import Register from '../../pages/register/Register';
import {auth, createUserProfileDocument} from "../../utils/firebase.utils";

import './App.css';

class App extends React.Component {

    componentDidMount() {
        const {setUser} = this.props; // we defined this prop in mapDispatchToProps below

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setUser(userAuth);
            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/shop'} component={Shop}/>
                    <Route path={'/register'}
                           render={() => this.props.user
                               ? (<Redirect to={'/'}/>)
                               : (<Register/>)
                           }/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => ({ // destructuring userReducer
    user: user.user     // pass as a prop
});

const mapDispatchToProps = dispatch => ({ // trigger state change
    setUser: user => dispatch(setUser(user)) // pass as a prop to App component to use whenever we want
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
