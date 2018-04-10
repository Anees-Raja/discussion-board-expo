import { START_LOADING, FINISH_LOADING } from '../actions/qol_actions'


INITIAL_STATE = {
  isLoading: false,
}

export default QolReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case START_LOADING:
      return {
        isLoading: true
      }
    case FINISH_LOADING:
      return {
        isLoading: false
      }
    case 'SIGN_OUT':
      return {
        isLoading: false
      }
    default:
      return { ...state }
  }
}