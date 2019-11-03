import React from 'react'
import { Link,Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Rewards from './Rewards';
import Cart from './Cart';
import Coupon from './Coupon';
import Promotion from './Promotion';
// import Register from './Register';
import { withRouter } from 'react-router-dom';


const Main = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={Dashboard}/> */}
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/rewards' component={Rewards}/>
      <Route path='/coupon' component={Coupon}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/promotion' component={Promotion}/>
      {/* <Route path='/register' component={Register}/> */}
    </Switch>
  </main>
)

export default Main;
