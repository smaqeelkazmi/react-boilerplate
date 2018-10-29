import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from "../../routes";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <DefaultHeader title="I'm Header" />
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                            <route.component {...props} />
                        )} />)
                            : (null);
                    },
                    )}
                    {/* <Redirect from="/" to="/dashboard" /> */}
                </Switch>
                <DefaultFooter/>
            </div>
        );
    }
}

export default DefaultLayout;