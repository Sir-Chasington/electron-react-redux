import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';

import history from '../utils/history';
import store from '../store';

import Layout from './layout/Layout';
import Home from './Home';

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="*" component={Home} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}
