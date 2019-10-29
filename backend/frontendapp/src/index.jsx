import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Login from './components/login.jsx';
import Home from './components/home.jsx';
import Reducer from './reducer/reducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Reducer,
  composeEnhancers(
    applyMiddleware(thunk), /* preloadedState, */
  ),
);
/* eslint-enable */

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            {/* <Route component={NotFound} /> */}
          </Switch>
    </BrowserRouter>
    {/* <Login /> */}
  </Provider>
), document.getElementById('react-app'));