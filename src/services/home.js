import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from "../views/Home";
import store from '../redux/store';

function mapStateToProps(state) {
    return {

    };
}

class home extends Component {

    componentDidMount() {
        store.dispatch({ type: 'INIT', payload: { page: 'home' } });
    }

    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(home);