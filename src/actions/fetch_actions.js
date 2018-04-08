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
      dispatch(setPosts(posts_arr))
      // dispatch(fetchCalendarEvents())
    })
  }
}

export const SET_CAL = 'SET_CAL'

const setCalendarEvents = (data) => ({
  type: SET_CAL,
  data
}) 

//gotta pass UID to this.
export const fetchCalendarEvents = (userAccessToken) => {
  return async (dispatch) => {
    let cal_ids = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', { headers: { Authorization: `Bearer ${userAccessToken}`} })
    let cal_ids_res = await cal_ids.json()
    let cal_ids_array = await cal_ids_res.items
    let events_array = []
    let events = await cal_ids_array.forEach(item => {
      fetch(`https://www.googleapis.com/calendar/v3/calendars/${item.id}/events`, { headers: { Authorization: `Bearer ${userAccessToken}`} })
      .then((res) => res.json())
      .then((data) => dispatch(setCalendarEvents({...data, type: 'google_cal'})))
    })
  }
}


export const fetchClassroomInfo = (userAccessToken) => {
  return async (dispatch) => {
    let course_res = await fetch('https://classroom.googleapis.com/v1/courses', { headers: { Authorization: `Bearer ${userAccessToken}`} })
    let course_res_info = await course_res.json()
    let course_info_array = course_res_info.courses
    course_info_array.forEach(course => {
      let data = {
        ...course,
        type: 'google_crs'
      }
      dispatch(setCourses(data))
    })
  }
}

export const SET_COURSES = 'SET_COURSES'

const setCourses = (data) => ({
  type: SET_COURSES,
  data
})