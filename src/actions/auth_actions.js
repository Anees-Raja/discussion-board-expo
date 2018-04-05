import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import moment from 'moment';

import { startLoading, finishLoading } from './qol_actions';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const ADD_PHOTO = 'ADD_PHOTO';

const USER_REF = firebase.database().ref('users');

const authStart = () => ({
  type: AUTH_START
});

const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

const authError = err => ({
  type: AUTH_ERROR,
  err
});

const addPhoto = photo_url => ({
  type: ADD_PHOTO,
  photo_url
});

export const login = () => {
  return async dispatch => {
    dispatch(authStart());
    dispatch(startLoading());
    try {
      // Add any configuration settings here:
      await GoogleSignin.configure();

      const data = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken
      );
      // login with credential
      const currentUserRaw = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

      let uid = currentUserRaw.user._user.uid;

      //get the important user info and store it
      let user_profile = currentUserRaw.additionalUserInfo.profile;

      let metadata = {
        isNew: currentUserRaw.additionalUserInfo.isNewUser,
        verified_email: user_profile.verified_email,
        locale: user_profile.locale
      };
      let currentUser = {
        metadata,
        uid,
        email: user_profile.email,
        first_name: user_profile.given_name,
        last_name: user_profile.family_name,
        gender: user_profile.gender,
        avatar: user_profile.picture
      };
      dispatch(addUserToFirebase(currentUser));
    } catch (e) {
      dispatch(authError(e));
    }
  };
};

export const addUserToFirebase = user => {
  return dispatch => {
    USER_REF.once('value', snap => {
      if (snap.val() != null) {
        snap.forEach(childSnap => {
          if (user.uid === childSnap.key) {
            dispatch(returningUser(user));
          }
        });
      } else {
        dispatch(firstTimeLogin(user));
      }
    });
  };
};

const firstTimeLogin = user => {
  return dispatch => {
    USER_REF.child(user.uid).set(user);
    dispatch(authSuccess(user));
    dispatch(finishLoading());
  };
};

const returningUser = user => {
  return dispatch => {
    let meta = user.metadata;
    let newMeta = {
      ...meta,
      last_login: moment()
    };
    let userObject = {
      ...user,
      metadata: newMeta
    };
    USER_REF.child(user.uid).update(userObject);
    USER_REF.child(user.uid).on('value', snapshot => {
      let user = snapshot.val()
      dispatch(authSuccess(user));
    })
    dispatch(finishLoading());
  };
};
