import firebase from '../config/firebase';
import { Google } from 'expo';
import { fetchCalendarEvents } from './fetch_actions';


import { startLoading, finishLoading } from './qol_actions';
import GoogleConfig from '../config/GoogleConfig'

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

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


export const login = () => {
  return async dispatch => {
    dispatch(authStart());
    dispatch(startLoading());
    try{
        // Add any configuration settings here:
        const data = await Google.logInAsync(GoogleConfig)

        if(data.type === 'success'){
          // create a new firebase credential with the token
          const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
          // login with credential
          const currentUserRaw = await firebase.auth().signInWithCredential(credential);

          firebase.auth().onAuthStateChanged(user => {
            if(user){
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
                avatar: user.photoURL,
                accessToken: data.accessToken
              };
              dispatch(addUserToFirebase(currentUser))
            }else{
              alert('User signed out.')
            }
          })

          firebase.auth().onIdTokenChanged(function(user) {
            if (user) {
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
                avatar: user.photoURL,
                accessToken: data.accessToken
              };
              dispatch(addUserToFirebase(currentUser))
            }
          });
          
        }else if(data.type === 'cancel'){
          console.log('cancelled login')
        }
      } catch (e) {
        console.log('ERROR:::', e)
        dispatch(authError(e));
    }
  };
};

export const addUserToFirebase = user => {
  return dispatch => {
    USER_REF.once('value', snap => {
        snap.forEach(childSnap => {
          if (user.uid == childSnap.key) {
            dispatch(returningUser(user));
          } else {
            dispatch(firstTimeLogin(user))
          }
        });
    });
  };
};

const firstTimeLogin = user => {
  return dispatch => {
    USER_REF.child(user.uid).update(user);
    dispatch(authSuccess(user));
    dispatch(finishLoading())
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
      metadata: newMeta,
    };
    USER_REF.child(user.uid).update(userObject)
    USER_REF.child(user.uid).on('value', snapshot => {
      let user = snapshot.val()
      dispatch(authSuccess(user));
      dispatch(finishLoading())
    })
  };
};