import firebase from '../config/firebase'

import { startLoading, finishLoading } from './qol_actions'

const POST_REF = firebase.database().ref('posts')

export const SET_POSTS = 'SET_POSTS'


export const setPosts = (arr) => ({
  type: SET_POSTS,
  arr
})

export const fetchPosts = (current_posts) => {
  return(dispatch) => {
    let posts = POST_REF.once('value', snap => {
      let postsObj = snap.val()
      let posts_arr = Object.values(postsObj)
      if(posts_arr.length > current_posts.length){
        dispatch(setPosts(posts_arr))
      }
    })
  }
}