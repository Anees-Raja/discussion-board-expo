import { GoogleSignin } from 'react-native-google-signin'
import firebase from 'react-native-firebase';

export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'

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

const USER_REF = firebase.database().ref('users')

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
      const currentUser = await firebase.auth().signInWithCredential(credential);

      console.info(JSON.stringify(currentUser.toJSON()))
      dispatch(authSuccess(currentUser))
    } catch (e) {
      console.error(e);
    }
  }
}