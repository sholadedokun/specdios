import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import {AUTH_USER} from './actions/actionTypes'
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import './styles/index.css';
import './styles/App.min.css';

//applying reduxThunk as middleware enabled us to use dispatch from actions
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('SpecdiosToken');


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
