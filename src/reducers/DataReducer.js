import { SET_CAL, SET_COURSES } from '../actions/fetch_actions';

INITIAL_STATE = {
  events: [],
  courses: []
}

//cal events come from courses

export default DataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_CAL:
      return {
        ...state,
        events: action.arr
      }
    case SET_COURSES:
      return {
        ...state,
        courses: action.arr
      }
    default:
      return { ...state }
  }
}