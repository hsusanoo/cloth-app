import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from '../../pages/homepage';
import {Shop} from '../../pages/shop';
import Header from '../../components/header/Header';
import Register from '../../pages/register/Register';
import {auth, createUserProfileDocument} from "../../utils/firebase.utils";
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        user: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        }
                    });
                });
            } else {
                this.setState({
                    user: userAuth,
                });
            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    RedirectToHome = () => <Redirect to={'/'}/>;

    render() {
        return (
            <div>
                <Header user={this.state.user}/>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/shop'} component={Shop}/>
                    <Route path={'/register'} component={(this.state.user ? this.RedirectToHome : Register)}/>
                </Switch>
            </div>
        );
    }
}

export default App;
