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
        const subTitle = <small>Modify me from <pre>src/services/home.js</pre></small>

        return (
            <div>
                <Home 
                    title="You're on Home Route"
                    subTitle={subTitle}
                    buttonText="Visit on github" 
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(home);