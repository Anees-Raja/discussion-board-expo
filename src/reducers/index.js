import { combineReducers } from 'redux'
import NavigationReducer from './NavigationReducer'
import AuthReducer from './AuthReducer'
import QolReducer from './QolReducer'
import FormReducer from './FormReducer';
import FeedReducer from './FeedReducer';

export default rootReducer = combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer,
  form: FormReducer,
  qol: QolReducer,
  feed: FeedReducer
})