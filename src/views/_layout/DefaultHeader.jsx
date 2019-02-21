import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import routes from "../../routes";

class DefaultHeader extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick(e, path) {
        e.preventDefault();

        if (this.props.history.location.pathname !== path) {
            this.props.history.push(path);
        }
    }

    render() {
        return (
            <Navbar color="inverse" light expand="md">
                <NavbarBrand 
                    href="/" 
                    onClick={(e) => this.handleClick(e, '/')}
                >
                    {this.props.title ? this.props.title : 'Application Navbar'}
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {routes.map((v, k) => {
                            return v.inHeader ? (
                                <NavItem key={k}>
                                    <NavLink href={v.path}
                                        onClick={(e) => this.handleClick(e, v.path)}
                                    >
                                        {v.name}
                                    </NavLink>
                                </NavItem>
                            ) : (null);
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}


export default withRouter(DefaultHeader);