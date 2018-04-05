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
import { Root } from 'native-base';


const middleware = createReactNavigationReduxMiddleware("root", state => state.nav)

const addListener = createReduxBoundAddListener("root")

class AppWithoutNavState extends Component {
  render() {
    return (
      <Root>
        <MainNavigator 
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })}
        />
      </Root>
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

export default class AppIndex extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavState />
      </Provider>
    )
  }
}