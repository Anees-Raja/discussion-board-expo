import { SET_FORM_TYPE, SET_TITLE, SET_BODY, SET_MEDIA, SET_EVENT_DATE } from '../actions/form_actions'


INITIAL_STATE = {
  formType: '',
  title: '',
  body: '',
  media: {},
  event_date: '',
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
    default:
      return state
  }
}