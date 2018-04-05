import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import { auth_handler, checkLoading } from '../middlewares/auth_handler';
import { formSubmitter, feedFetcher } from '../middlewares/transitions';

export default configureStore = () => {
  const middlewares = [thunk, auth_handler, checkLoading, formSubmitter, feedFetcher];
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

  return store
}