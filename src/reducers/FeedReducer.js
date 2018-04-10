import { SET_POSTS } from '../actions/fetch_actions'


INITIAL_STATE = {
  data: []
}

export default FeedReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_POSTS:
      return {
        ...state,
        data: action.arr
      }
    case 'SIGN_OUT':
      return {
        data: []
      }
    default:
    return { ...state }
  }
}