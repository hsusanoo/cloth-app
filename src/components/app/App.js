import React from 'react';
import {Route, Switch} from "react-router-dom";
import {HomePage} from '../../pages/homepage';
import {Shop} from '../../pages/shop';
import Header from '../../components/header/Header';
import Register from '../../pages/register/Register';
import {auth} from "../../utils/firebase.utils";
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({user});
            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header user={this.state.user}/>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/shop'} component={Shop}/>
                    <Route path={'/register'} component={Register}/>
                </Switch>
            </div>
        );
    }
}

export default App;
