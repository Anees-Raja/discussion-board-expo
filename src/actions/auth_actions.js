import firebase from '../config/firebase'
import { Google } from 'expo';


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
    try{
        // Add any configuration settings here:
        const data = await Google.logInAsync({
          androidClientId: '498987946235-bm1l6kv2a78j5nsg6m16q1r2e2hbckql.apps.googleusercontent.com',
          iosClientId: '498987946235-qh6v4ob61d2oakfrdke232b4oc3ck1n0.apps.googleusercontent.com',
          webClientId: '498987946235-g6helpupvb0om1cgt1d31tq2rv1o9i56.apps.googleusercontent.com',
          scopes: ['profile', 'email']
        })

        if(data.type === 'success'){
          // create a new firebase credential with the token
          const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken,data.accessToken);
          // login with credential
          const currentUserRaw = await firebase.auth().signInWithCredential(credential);
        }else if(data.type === 'cancel'){
          console.log('cancelled login')
        }

        firebase.auth().onAuthStateChanged(user => {
          let uid = user.uid;

          //get the important user info and store it
          let metadata = {
            isNew: false,
            verified_email: user.emailVerified,
            locale: 'en'
          };
          let currentUser = {
            metadata,
            uid,
            email: user.email,
            first_name: user.displayName,
            last_name: '',
            gender: 'male',
            avatar: user.photoURL
          };
          dispatch(addUserToFirebase(currentUser));
        })

      } catch (e) {
        console.log(e)
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
      last_login: Date.now()
    };
    let userObject = {
      ...user,
      metadata: newMeta
    };
    console.log(userObject)
    USER_REF.child(user.uid).update(userObject);
    USER_REF.child(user.uid).on('value', snapshot => {
      let user = snapshot.val()
      dispatch(authSuccess(user));
    })
    dispatch(finishLoading());
  };
};
