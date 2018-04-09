import { NavigationActions } from 'react-navigation'

import { authSuccess, authError } from '../actions/auth_actions';

export const auth_handler = store => next => action => {
  next(action)

  if(action.type === 'AUTH_SUCCESS'){
    store.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'FeedScreen'
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