import React, { useState } from "react";
import {connect} from "react-redux";
import {auth} from "../actions";
import { Redirect} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function onSubmit (e) {
  e.preventDefault();
  console.log(this.props.state.username);
  // this.props.auth(this.props.username,this.props.password);
}

function Login(props) {
    const classes = useStyles();
    const [username, setUsername] = useState( '' );
    const [password, setPassword] = useState( '' );
 
      if (props.isAuthenticated) {
        return <Redirect to="/" />
      }
      return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                Don't have an account? Register here.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
      )
}

function mapStateToProps(state) {
  let errors = [];
  if (state.errors) {
    errors = Object.keys(state.errors).map(field => {
      return {field, message: state.errors[field]};
    });
  }
  return {
    errors,
    isAuthenticated: state.isAuthenticated
  };
} 
  
function mapDispatchToProps(dispatch) {
  return {
    auth: (username, password) => {
      return dispatch(auth.login(username, password));
    }  };
}
 

export default connect(mapStateToProps, mapDispatchToProps)(Login);