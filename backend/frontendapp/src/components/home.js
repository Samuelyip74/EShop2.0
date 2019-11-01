import React from 'react';
import { useSelector, useEffect, useDispatch  } from 'react-redux';
import {connect} from "react-redux";
import {notes, auth} from "../actions";

import { makeStyles } from '@material-ui/core/styles';
import SimpleBottomNavigator from './SimpleBottomNavigator';
import ResponsiveDrawer from './ResponsiveDrawer';
import Main from './Main';

// const stateUsername = () => {
//   const username = useSelector(state => state.user.username);
//   return username;
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const IsUserNull = () => {
  const stateUsername = useSelector(state => state);
  if(stateUsername.user == null){
    return <div></div>
  }
  else {
    return <span>{stateUsername.user.username}</span>
  }
}

function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch()

   return (
      <div style={{display:'flex', flexDirection:'column'}}>
        <div className={classes.root} style={{flex:1}}>
              <ResponsiveDrawer />
        </div>
        <div style={{flex: 1,height: '100vh',margin: 'auto',paddingTop:100}}>
          <div style={{textAlign: "right"}}>
            <IsUserNull />
            (<a onClick={() => dispatch(auth.logout())}>logout</a>)
            <Main />
          </div>
        </div>
            <SimpleBottomNavigator />
      </div>

  );
}

export default Home;