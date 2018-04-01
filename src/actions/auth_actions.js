import { GoogleSignin } from 'react-native-google-signin'
import firebase from 'react-native-firebase';

export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const ADD_PHOTO = 'ADD_PHOTO'

const authStart = () => ({
  type: AUTH_START
})

const authSuccess = (currentUser) => ({
  type: AUTH_SUCCESS,
  currentUser
})

const authError = (err) => ({
  type: AUTH_ERROR,
  err,
})

const addPhoto = (photo_url) => ({
  type: ADD_PHOTO,
  photo_url
})


export const login = () => {
  return async (dispatch) => {
    dispatch(authStart())
    try {
      // Add any configuration settings here:
      await GoogleSignin.configure();

      const data = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const currentUserRaw = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

      //get the important user info and store it
      let user_profile = currentUserRaw.additionalUserInfo.profile

      let metadata = {
        isNew: currentUserRaw.additionalUserInfo.isNewUser,
        verified_email: user_profile.verified_email,
        locale: user_profile.locale,
      }

      let currentUser = {
        metadata,
        email: user_profile.email,
        first_name: user_profile.given_name,
        last_name: user_profile.family_name,
        gender: user_profile.gender,
        avatar: user_profile.picture
      }
      dispatch(addUserToFirebase(currentUser))
    } catch (e) {
      console.error(e);
    }
  }
}

export const addUserToFirebase = (user) => {
  return(dispatch) => {
    let user_ref = firebase.database().ref('users')
    user_ref.once('value', snap => {
      if(snap.val() != null){
        snap.forEach(childSnap => {
          let userDB = childSnap.val()
          if(userDB.email === user.email){
            dispatch(returningUser(userDB))
          }
        })
      }else{
        dispatch(firstTimeLogin(user))
      }
    })
  }
}

const firstTimeLogin = (user) => {
  return(dispatch) => {
    console.log('FIRST TIME LOGIN', user)
    let user_ref = firebase.database().ref('users')
    let key = user_ref.push().key
    let userWithId = {
      ...user,
      uid: key,
    }
    user_ref.child(key).set(userWithId)
    dispatch(authSuccess(userWithId))
  }
}

const returningUser = (user) => {
  return(dispatch) => {
    let meta = user.metadata
    let newMeta = {
      ...meta,
      last_login: new Date()
    }
    let userObject = {
      ...user,
      metadata: newMeta
    }
    let user_ref = firebase.database().ref(`users/${user.uid}`)
    user_ref.update(userObject)
    dispatch(authSuccess(userObject))
  }
}