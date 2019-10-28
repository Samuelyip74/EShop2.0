import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleBottomNavigator from './SimpleBottomNavigator';
import ResponsiveDrawer from './ResponsiveDrawer';
import Main from './Main';

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

export default function Home() {
  const classes = useStyles();
 
   return (
      <div style={{display:'flex', flexDirection:'column'}}>
        <div className={classes.root} style={{flex:1}}>
              <ResponsiveDrawer />
        </div>
        <div style={{flex: 1,height: '100vh',margin: 'auto',paddingTop:100}}>
          <Main />
        </div>
            <SimpleBottomNavigator />
      </div>

  );
}

