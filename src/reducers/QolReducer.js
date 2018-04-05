import { START_LOADING, FINISH_LOADING } from '../actions/qol_actions'


INITIAL_STATE = {
  isLoading: false,
}

export default QolReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}