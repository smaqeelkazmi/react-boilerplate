import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from "../../routes";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

function mapStateToProps(state) {
    return {
        state
    };
}

class DefaultLayout extends Component {
    render() {
        const header = <DefaultHeader title="I'm Header" />;
        const footer = <DefaultFooter/>;
        return (
            <div>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route key={idx}
                                   path={route.path}
                                   exact={route.exact}
                                   name={route.name}
                                   render={props => {
                                       return (
                                           <div>
                                               {!route.hasNoHeader ? header : ''}
                                               <route.component {...props} />
                                               {!route.hasNoFooter ? footer : ''}
                                           </div>
                                       )
                                   }}
                            />
                        ) : (null);
                    },
                    )}
                    {/* <Redirect from="/" to="/dashboard" /> */}
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DefaultLayout);