import React, { useState } from 'react';
import { useSelector, useEffect, useDispatch  } from 'react-redux';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {auth} from "./actions";
import HomePage from './components/Home';
import Login from "./components/Login";
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

  React.useEffect(() => { 
    dispatch(auth.loadUser());
  }, []);

    return (
      <BrowserRouter>
      <div>
        <Switch>
          {/* <Route exact path="/dashboard" component={dashboard} /> */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRouteComponent path="/" component={HomePage} />
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

