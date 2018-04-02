import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import { auth_handler, checkLoading } from '../middlewares/auth_handler';

export default configureStore = () => {
  const middlewares = [thunk, auth_handler, checkLoading];
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

  return store
}