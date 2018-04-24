import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'

import './index.scss'
import allReducers from './reducers'
import App from './App'

if (!global._babelPolyfill) {
    require('babel-polyfill')
}

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger),
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root')
)