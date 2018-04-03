/**
 * GENERAL FORM ACTIONS
 */

export const SET_FORM_TYPE = 'SET_FORM_TYPE'
export const CANCEL = 'CANCEL'

const setFormType = (formType) => ({
  type: SET_FORM_TYPE,
  formType
})

export const getFormType = (val) => {
  return(dispatch) => {
    dispatch(setFormType(val))
  } 
}

export const cancel = () => {
  return(dispatch) => {
    dispatch({ type: CANCEL })
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