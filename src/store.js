/* eslint-disable no-underscore-dangle no-undef */
// import { browserHistory } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from './utils/history';
import reducer from './reducer';

// Redux DevTools
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const routingMiddleware = routerMiddleware(history);

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, routingMiddleware)),
);

export default store;
