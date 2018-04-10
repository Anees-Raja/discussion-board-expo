import firebase from '../config/firebase'

import { startLoading, finishLoading } from './qol_actions'

import { addUserToFirebase } from './auth_actions'


export const GET_USER_INFO = 'GET_USER_INFO';

export const fetchUserInfo = (userObj, userAccessToken) => {
  return async (dispatch) => {
    let user_res = await fetch(`https://www.googleapis.com/plus/v1/people/me`, { headers: { Authorization: `Bearer ${userAccessToken}`} })
    let user_res_info = await user_res.json()
    let user = user_res_info
    let uid = userObj.uid
    //get the important user info and store it
    let metadata = {
      isNew: false,
      verified: user.verified,
      isPlusUser: user.isPlusUser,
      objectType: user.objectType,
      language: user.language
    };
    let userFromPlusFetch = {
      metadata,
      uid,
      email: user.emails[0].value,
      first_name: user.name.givenName,
      last_name: user.name.familyName,
      gender: user.gender,
      avatar: user.image.url,
      profile_url: user.url,
      accessToken: userAccessToken
    };
    let userFromNormalFetch = {
      metadata,
      uid,
      email: user.emails[0].value,
      first_name: user.name.givenName,
      last_name: user.name.familyName,
      gender: '',
      avatar: user.image.url,
      profile_url: '',
      accessToken: userAccessToken,
    }

    let finalUser = userFromNormalFetch
    if(user.isPlusUser){
      finalUser = userFromPlusFetch
    }
    dispatch(addUserToFirebase(finalUser))
  }
}

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

export const setCalendarIds = (arr) => ({
  type: SET_CAL,
  arr
})

export const fetchClassroomInfo = (userAccessToken) => {
  return async (dispatch) => {
    let course_res = await fetch('https://classroom.googleapis.com/v1/courses', { headers: { Authorization: `Bearer ${userAccessToken}`} })
    let course_res_info = await course_res.json()
    let courses = []
    let course_info_array = course_res_info.courses
    course_info_array.forEach(course => courses.push(course))
    dispatch(setCourses(courses))
  }
}
// NOT BEING USED
export const fetchAnnForCourse = (courseId, userAccessToken) => {
  return async (dispatch) => {
    let ann_res = await fetch(`https://classroom.googleapis.com/v1/courses/${courseId}/announcements/`, { headers: { Authorization: `Bearer ${userAccessToken}`} })
    let ann_res_info = await ann_res.json()
    console.log(ann_res_info)
  }
}

export const fetchCalForCourse = (calendarId, userAccessToken) => {
  return async (dispatch) => {
    let cal_res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, { headers: { Authorization: `Bearer ${userAccessToken}`} })
    let cal_res_info = await cal_res.json()
    console.log(cal_res_info)
  }
}
// NOT BEING USED

export const SET_COURSES = 'SET_COURSES'

export const setCourses = (arr) => {
  return(dispatch) => {
    dispatch({
      type: SET_COURSES,
      arr
    })
    /**
     * Check required auth scopes
     * 
     *  arr.forEach(course => {
        let id = course.id
        dispatch({ type: 'FETCH_ANN', id })
        })
     */
    // arr.forEach(course => {
    //   let cal_id = course.calendarId
    //   dispatch({ type: 'FETCH_CAL', cal_id })
    // })
  }
}