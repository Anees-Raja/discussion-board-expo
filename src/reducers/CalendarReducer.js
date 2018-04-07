import { SET_CAL } from '../actions/fetch_actions';

INITIAL_STATE = {
  events: {}
}

export default CalendarReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_CAL:
      return {
        ...state,
        events: action.data
      }
    default:
      return state
  }
}