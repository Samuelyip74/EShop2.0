import React from 'react';
import {connect} from "react-redux";
import {notes, auth} from "../actions";

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

function Home(props) {
  const classes = useStyles();
 
   return (
      <div style={{display:'flex', flexDirection:'column'}}>
        <div className={classes.root} style={{flex:1}}>
              <ResponsiveDrawer />
        </div>
        <div style={{flex: 1,height: '100vh',margin: 'auto',paddingTop:100}}>
          <div style={{textAlign: "right"}}>
            {props.user.username} (<a onClick={props.logout}>logout</a>)
            <Main />
          </div>
        </div>
            <SimpleBottomNavigator />
      </div>

  );
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => {
      dispatch(notes.fetchNotes());
    },
    addNote: (text) => {
      return dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
      return dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
      dispatch(notes.deleteNote(id));
    },
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);