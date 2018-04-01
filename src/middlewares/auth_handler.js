import { GoogleSignin } from 'react-native-google-signin'
import firebase from 'react-native-firebase';
import { NavigationActions } from 'react-navigation'

import { authSuccess, authError } from '../actions/auth_actions';

export const auth_handler = store => next => action => {
  next(action)

  if(action.type === 'AUTH_SUCCESS'){
    store.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'FeedScreen'
    })

    const USER_REF = firebase.database().ref('users')

    let currentUser = store.getState().auth.currentUser

  }
}