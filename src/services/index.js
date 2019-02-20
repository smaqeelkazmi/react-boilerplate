import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
import MasterLayout from '../views/_layout/MasterLayout';

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
            <MasterLayout>
                IndexPage
            </MasterLayout>
        );
    }
}

export default connect(
    mapStateToProps,
)(index);