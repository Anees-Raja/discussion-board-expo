import { combineReducers } from 'redux'
import NavigationReducer from './NavigationReducer'
import AuthReducer from './AuthReducer';

export default rootReducer = combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer
})