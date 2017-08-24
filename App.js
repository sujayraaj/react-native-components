import React from 'react';
import { AppRegistry, ListView, StyleSheet, Text, View, Image } from 'react-native';
import { Router, Route, IndexRoute, Switch, MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

import MainView from './src/containers/MainView';
import Login from './src/components/Login';
import About from './src/components/About';

import store, { history } from './src/store';

const authTransition = function authTransition(nextState, replace, callback) {
  const state = store.getState()
  const user = state.user

  // todo: in react-router 2.0, you can pass a single object to replace :)
  if (!user.isLoggedIn) {
    replace({ nextPathname: nextState.location.pathname }, '/login')
  }

  callback()
}
class MobileApp extends React.Component {
  render(){
    return (
    <Switch>
      <Route exact path='/' component={MainView}/>
      <Route path='/about' component={About}/>
      <Route path='/login' component={Login}/>
    </Switch>
    )
  }
}

const router = (
  <Provider store={store}>
    <MemoryRouter>
      <MobileApp/>
    </MemoryRouter>
  </Provider>
);


export default class App extends React.Component {
  render(){
    return router;
  }
};