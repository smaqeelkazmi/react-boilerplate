import React, {
    Component
} from 'react';
// import logo from './logo.svg';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import DefaultLayout from "./views/_layout/DefaultLayout";

class App extends Component {
    render() {
        return ( 
            <HashRouter>
                <Switch>
                    <Route path="/" name="Home" component={DefaultLayout} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;