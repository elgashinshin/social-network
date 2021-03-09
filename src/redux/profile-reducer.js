import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let ADD_POST = 'ADD-POST';
let SET_USER = 'SET-USER';
let SET_STATUS = 'SET-STATUS';
let SAVE_PHOTO = 'SAVE_PHOTO';
let UPDATE_PROFILE = 'UPDATE_PROFILE';

let initialState = {
    posts: [],
    newTextUpdate: '',
    profile: null,
    status: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {post: action.textPost, likeCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newTextUpdate: ''
            }

        case SET_USER:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SAVE_PHOTO:
            debugger
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        default:
            return state;
    }
}

export const addPostCreator = postValue => ({type: ADD_POST, textPost: postValue});
export const setUserSuccess = profile => ({type: SET_USER, profile});
export const setStatus = status => ({type: SET_STATUS, status});
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO, photos});
export const updateProfileSuccess = info => ({type: SAVE_PHOTO, info});

export const setUserId = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.setUserId(userId)
        dispatch(setUserSuccess(data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileStatus(userId)
        dispatch(setStatus(data))
    }
}

export const setStatusProfile = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.setProfileStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (photo) => {
    return async (dispatch) => {
        debugger
        let response = await profileAPI.updatePhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const updateProfile = (info) => {
    return async (dispatch, getState) => {
        let userId = getState().header.userId;
        let response = await profileAPI.updateProfileInfo(info)
        if (response.data.resultCode === 0) {
            dispatch(setUserId(userId))
        } else {
            let message = response.data.messages[0]
            let number = message.indexOf('->');
            let messageLegth = message.length;
            let newMessage = message.slice(number + 2, messageLegth - 1)
            let test = newMessage.toLowerCase();

           dispatch(stopSubmit('profilieInfo', {
               'contacts' : {
                    [test] : response.data.messages[0]
               }
           }))
            return Promise.reject();
        }
    }
}

export default profileReducer;