import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {auth} from "./actions";
import HomePage from './components/home';
import Login from "./components/login";
import Register from "./components/Register";

class RootContainerComponent extends Component {

  componentDidMount() {
    this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  render() {
    let {PrivateRoute} = this;
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          {/* <Route exact path="/dashboard" component={dashboard} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    }
  }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

class App extends Component {
  render() {
    return (
      <RootContainer />    
    );
  }
}
export default App;

