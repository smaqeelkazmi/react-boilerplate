import React, {
    Component
} from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from "./routes";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return ( 
            <HashRouter>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => <route.component {...props} />}
                            />
                        ) : (null);
                    },
                    )}
                </Switch>
            </HashRouter>
        );
    }
}

export default App;