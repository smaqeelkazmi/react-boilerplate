import React, { Component } from 'react';

import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

class MasterLayout extends Component {
    render() {
        return (
            <div>
                <DefaultHeader title="Hello header" />
                {this.props.children}
                <DefaultFooter />
            </div>
        );
    }
}

export default (MasterLayout);