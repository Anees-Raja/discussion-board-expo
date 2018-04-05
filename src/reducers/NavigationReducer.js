import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import MainStack from '../config/routes'

const INITIAL_STATE = MainStack.router.getStateForAction(NavigationActions.init());

export default NavigationReducer = (state = INITIAL_STATE, action) => {
  const nextState = MainStack.router.getStateForAction(action, state)

  return nextState || state
}