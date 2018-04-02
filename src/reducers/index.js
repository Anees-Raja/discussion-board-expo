import { combineReducers } from 'redux'
import NavigationReducer from './NavigationReducer'
import AuthReducer from './AuthReducer'
import QolReducer from './QolReducer'

export default rootReducer = combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer,
  qol: QolReducer
})