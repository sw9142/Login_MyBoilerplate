import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { useSelector } from "react-redux";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  link: {
    color: "white",
    padding: "1rem 0.5rem",
    textDecoration: "none",
  },
}));

function App() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  return (
    <>
      <Router>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" noWrap>
              <Link className={classes.link} to="/">
                Home
              </Link>

              {!user.loginSuccess && (
                <Link className={classes.link} to="/login">
                  Login
                </Link>
              )}

              {!user.loginSuccess && (
                <Link className={classes.link} to="/register">
                  Registration
                </Link>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
        <hr />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
