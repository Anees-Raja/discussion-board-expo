import { NavigationActions } from 'react-navigation'

import { authSuccess, authError } from '../actions/auth_actions';
import { finishLoading } from '../actions/qol_actions';
import { getUserInfo } from '../actions/fetch_actions';

export const auth_handler = store => next => action => {
  next(action)
  if(action.type === 'AUTH_SUCCESS'){
    store.dispatch(finishLoading())
    store.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'FeedScreen'
    })
  }

  if(action.type === 'SIGN_OUT'){
    store.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'LoginScreen'
    })
  }
}

export const checkLoading = store => next => action => {
  next(action)

  if(action.type === 'START_LOADING'){
    store.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'LoadingScreen'
    })
  }
}