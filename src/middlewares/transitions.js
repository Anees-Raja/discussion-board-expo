import { submitAnnouncement, submitActivity, submitEvent } from '../actions/form_actions'

export const formSubmitter = store => next => action => {
  next(action)

  if(action.type === 'SUBMIT_START'){
    let { data } = action
    let createdAt = new Date()
    let currentUid = store.getState().auth.currentUser.uid

    let newObj = {
      ...data,
      createdAt,
      author: currentUid
    }

    if(data.type == 'announcement'){
      store.dispatch(submitAnnouncement(newObj))
    } else if(data.type == 'activity'){
      store.dispatch(submitActivity(newObj))
    } else if(data.type == 'event'){
      store.dispatch(submitEvent(newObj))
    }
  }

  if(action.type === 'SUBMIT_SUCCESS'){
    store.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'FeedScreen'
    })
  }
}