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
      <Route path='/app/dashboard' component={Dashboard}/>
      <Route path='/app/rewards' component={Rewards}/>
      <Route path='/app/coupon' component={Coupon}/>
      <Route path='/app/cart' component={Cart}/>
      <Route path='/app/promotion' component={Promotion}/>
      {/* <Route path='/register' component={Register}/> */}
    </Switch>
  </main>
)

export default Main;
