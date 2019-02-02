import React from 'react';
import Loadable from 'react-loadable'


function Loading() {
    return <div>Loading...</div>;
}

const IndexPage = Loadable({
    loader: () => import('./services/index.js'),
    loading: Loading,
});

const Home = Loadable({
    loader: () => import('./services/home.js'),
    loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Index', component: IndexPage, inHeader: true, hasNoHeader: false, hasNoFooter: false },
    { path: '/home', name: 'Home', component: Home, inHeader: true, hasNoHeader: false, hasNoFooter: true }
];

export default routes;