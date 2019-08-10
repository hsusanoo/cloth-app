import React from 'react';
import {Route, Switch} from "react-router-dom";
import {HomePage} from '../../pages/homepage';
import {Shop} from '../../pages/shop';
import Header from '../../components/header/Header';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/shop'} component={Shop}/>
            </Switch>
        </div>
    );
}

export default App;
