import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import routes from "../../routes";

class DefaultHeader extends Component {

    // constructor(props) {
    //     super(props);
    // }

    handleClick(e, path) {
        e.preventDefault();

        if (this.props.history.location.pathname !== path) {
            this.props.history.push(path);
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.title ? this.props.title : 'DefaultHeader'}</h1>
                <br />
                <ul>{routes.map((v, k) => {
                    return v.inHeader ? 
                    (
                        <li key={k}>
                            <a 
                                href={v.path} 
                                onClick={(e) => this.handleClick(e, v.path)}
                            >
                                {v.name}
                            </a>
                        </li>
                    ) : (null);
                })}</ul>
            </div>
        );
    }
}


export default withRouter(DefaultHeader);