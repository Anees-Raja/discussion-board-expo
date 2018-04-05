import { SET_FORM_TYPE, SET_TITLE, SET_BODY, SET_MEDIA, SET_EVENT_DATE, OPEN_DATE, CLOSE_DATE, SUBMIT_SUCCESS } from '../actions/form_actions'


INITIAL_STATE = {
  formType: '',
  title: '',
  body: '',
  media: {},
  event_date: '',
  showDatePicker: false
}

export default FormReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case SET_FORM_TYPE:
      return {
        ...state,
        formType: action.formType
      }
    case SET_TITLE:
      return {
        ...state,
        title: action.title
      }
    case SET_BODY:
      return {
        ...state,
        body: action.body
      }
    case SET_MEDIA:
      return {
        ...state,
        media: action.media
      }
    case SET_EVENT_DATE:
      return {
        event_date: action.date
      }
    case OPEN_DATE:
      return {
        ...state,
        showDatePicker: true
      }
    case CLOSE_DATE:
      return {
        ...state,
        showDatePicker: false
      }
    case SUBMIT_SUCCESS:
      return {
        ...state,
        formType: '',
        title: '',
        body: '',
        media: {},
        event_date: '',
        showDatePicker: false
      }
    default:
      return state
  }
}