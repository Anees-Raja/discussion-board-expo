import firebase from '../config/firebase'

import { startLoading, finishLoading } from './qol_actions'

export const RECORD_INPUT = 'RECORD_INPUT'
export const CREATE_POST = 'CREATE_POST'

const POST_REF = firebase.database().ref('posts')

const recordInput = (input) => ({
    type: RECORD_INPUT,
    input
})

const sendPost = (post, userId) => {
    return(dispatch) => {
        dispatch(startLoading())
        let postKey = POST_REF.push().key
        let post = {
            ...post,
            createdAt: new Date(),
						author: userId,
        }
    }
}