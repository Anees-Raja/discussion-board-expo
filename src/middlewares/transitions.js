import { submitPost } from '../actions/form_actions'
import { fetchPosts } from '../actions/feed_actions'


export const formSubmitter = store => next => action => {
  next(action)

  if(action){
    let current_state = store.getState()
    console.log(action.type, action)
    console.log('STATE:', current_state)
  }

  if(action.type === 'SUBMIT_START'){
    let { data } = action
    let createdAt = Date.now()
    let currentUser = store.getState().auth.currentUser

    let newObj = {
      ...data,
      createdAt,
      author_id: currentUser.uid,
      author_name: `${currentUser.first_name} ${currentUser.last_name}`,
      author_email: currentUser.email
    }

    store.dispatch(submitPost(newObj))
  }

  if(action.type === 'SUBMIT_SUCCESS'){
    store.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'Feed'
    })
  }
}

export const feedFetcher = store => next => action => {
  next(action)

  let current_posts_state = store.getState().feed.data
  if(action.routeName == 'Feed'){
    store.dispatch(fetchPosts(current_posts_state))
  }
}