import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import {HomePage} from '../../pages/homepage';
import {Shop} from '../../pages/shop';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/shop'} component={Shop}/>
            </Switch>
        </div>
    );
}

export default App;
