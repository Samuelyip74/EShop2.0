import React, { useState } from 'react';
import { useSelector, useEffect, useDispatch  } from 'react-redux';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {auth} from "./actions";
import HomePage from './components/home';
import Login from "./components/login";
import Register from "./components/Register";


function PrivateRouteComponent  ({component: ChildComponent, ...rest}) {

  const state = useSelector(state => state);

  return <Route {...rest} render={props => {
    if (state.isLoading) {
      return <em>Loading...</em>;
    } else if (!state.isAuthenticated) {
      return <Redirect to="/login" />;
    } else {
      return <ChildComponent {...props} />
    }
  }} />
}


function RootContainerComponent (props) {

  const dispatch = useDispatch();
  // const PrivateRoute = <PrivateRouteComponent />;

  React.useEffect(() => { // Pass in a callback function!
    dispatch(auth.loadUser());
  }, []);

    return (
      <BrowserRouter>
      <div>
        <Switch>
          <PrivateRouteComponent exact path="/" component={HomePage} />
          {/* <Route exact path="/dashboard" component={dashboard} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
      </BrowserRouter>
    );
  }

function App (props){
    return (
      <RootContainerComponent />    
    );
}
export default App;

