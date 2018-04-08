import { SET_CAL, SET_COURSES } from '../actions/fetch_actions';

INITIAL_STATE = {
  events: [],
  courses: {
    info: []
  }
}

export default DataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_CAL:
      return {
        ...state,
        events: [...state.events, action.data]
      }
    case SET_COURSES:
      return {
        ...state,
        courses: {
          info: [...state.courses.info, action.data]
        }
      }
    default:
      return { ...state }
  }
}