import React, { Component } from 'react';

import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

class MasterLayout extends Component {
    render() {
        return (
            <div>
                <DefaultHeader title="ReactStarterKit" />
                {this.props.children}
                <DefaultFooter />
            </div>
        );
    }
}

export default (MasterLayout);