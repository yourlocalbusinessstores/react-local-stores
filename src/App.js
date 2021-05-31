import React, { Component, Fragment } from 'react';
import './style.css';
import SignInSide from './signinslide';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import firebase from 'firebase';
export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <SignInSide />
        </Route>
        <Route exact path="/login">
          <SignInSide />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}
