import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR, ADD_USER_TO_FIREBASE } from '../actions/auth_actions'

const INITIAL_STATE = {
  isLoading: false,
  currentUser: {},
  error: ''
}

export default AuthReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case AUTH_START:
      return {
        ...state,
        isLoading: true
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.currentUser,
        isLoading: false
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.err,
        isLoading: false
      }
    default:
      return state
  }
}