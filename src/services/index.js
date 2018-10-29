import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';

function mapStateToProps(state) {
    return {

    };
}

class index extends Component {

    componentDidMount() {
        store.dispatch({ type: 'INIT', payload: {page: 'index'}});
    }

    render() {
        return (
            <div>
                IndexPage
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(index);