import { SET_POSTS } from '../actions/feed_actions'


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
    default:
      return state
  }
}