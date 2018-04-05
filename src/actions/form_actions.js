import { startLoading, finishLoading } from './qol_actions'
import firebase from '../config/firebase'

/**
 * GENERAL FORM ACTIONS
 */
export const SET_FORM_TYPE = 'SET_FORM_TYPE'

const setFormType = (formType) => ({
  type: SET_FORM_TYPE,
  formType
})

export const getFormType = (val) => {
  return(dispatch) => {
    dispatch(setFormType(val))
  } 
}


export const SET_TITLE = 'SET_TITLE'
export const SET_BODY = 'SET_BODY'


export const setTitle = (title) => ({
  type: SET_TITLE,
  title
})

export const getTitle = (val) => {
  return(dispatch) => {
    dispatch(setTitle(val))
  } 
}

export const setBody = (body) => ({
  type: SET_BODY,
  body
})

export const getBody = (val) => {
  return(dispatch) => {
    dispatch(setBody(val))
  } 
}

/**
 * EVENT SPECIFIC
 */
export const SET_MEDIA = 'SET_MEDIA'
export const SET_EVENT_DATE = 'SET_EVENT_DATE'
export const CLOSE_DATE = 'CLOSE_DATE'
export const OPEN_DATE = 'OPEN_DATE'

export const setMedia = (mediaType, mediaUrl) => ({
  type: SET_MEDIA,
  media: {
    type: mediaType,
    url: mediaUrl
  }
})

export const getMedia = (val) => {
  return(dispatch) => {
    dispatch(setMedia(val))
  } 
}

export const setEventDate = (date) => ({
  type: SET_EVENT_DATE,
  date
})

export const getEventDate = (val) => {
  return(dispatch) => {
    dispatch(setEventDate(val))
  } 
}

export const openDatePicker = () => {
  return(dispatch) => {
    dispatch({ type: OPEN_DATE })
  }
}

export const closeDatePicker = () => {
  return(dispatch) => {
    dispatch({ type: CLOSE_DATE })
  }
}

/**
 * SUBMIT ACTIONS
 */
export const SUBMIT_START = 'SUBMIT_START'
export const SUBMIT_EVENT = 'SUBMIT_EVENT'
export const SUBMIT_ACTIVITY = 'SUBMIT_ACTIVITY'
export const SUBMIT_ANNOUNCEMENT = 'SUBMIT_ANNOUNCEMENT'
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS'

const POST_REF = firebase.database().ref('posts')

const submitStart = (data) => ({
  type: SUBMIT_START,
  data,
})

export const submitPost = (postObj) => {
  return(dispatch) => {
    dispatch({ type: SUBMIT_ACTIVITY })

    let key = POST_REF.push().key
    let newObj = {
      ...postObj,
      id: key
    }
    POST_REF.child(key).set(newObj)

    dispatch(finishLoading())
    dispatch(submitSuccess())
  }
}

const submitSuccess = () => ({
  type: SUBMIT_SUCCESS
})

export const handleFormSubmit = (data) => {
  return(dispatch) => {
    dispatch(startLoading())
    dispatch(submitStart(data))
  }
}