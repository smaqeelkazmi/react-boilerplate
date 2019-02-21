import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
import MasterLayout from '../views/_layout/MasterLayout';
import Home from '../views/Home';

function mapStateToProps(state) {
    return {

    };
}

class index extends Component {

    componentDidMount() {
        store.dispatch({ type: 'INIT', payload: {page: 'index'}});
    }

    render() {
        const subTitle = <small>Modify me from <pre>src/services/index.js</pre></small>
        return (
            <Home 
                title="Welcome to React"
                subTitle={subTitle}
                buttonText="Visit on github" 
                />
        );
    }
}

export default connect(
    mapStateToProps,
)(index);