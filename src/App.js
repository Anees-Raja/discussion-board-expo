import React, { Component } from 'react';
import { 
  Text,
  View 
} from 'react-native';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { addNavigationHelpers } from 'react-navigation'
import { connect, Provider } from 'react-redux'

import MainNavigator from './config/routes'
import configureStore from './store'


const middleware = createReactNavigationReduxMiddleware("root", state => state.nav)

const addListener = createReduxBoundAddListener("root")

class AppWithoutNavState extends Component {
  render() {
    return (
      <MainNavigator 
      navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav,
  }
}
const store = configureStore()
const AppWithNavState = connect(mapStateToProps)(AppWithoutNavState);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavState />
      </Provider>
    )
  }
}