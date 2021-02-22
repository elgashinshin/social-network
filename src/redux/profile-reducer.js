import {profileAPI} from "../api/api";

let ADD_POST = 'ADD-POST';
let SET_USER = 'SET-USER';
let SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
    ],
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
                posts: [...state.posts, newPost ],
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
        default:
            return state;
    }
}

export const addPostCreator = postValue => ({type: ADD_POST, textPost: postValue});
export const setUserSuccess = profile => ({type: SET_USER, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const setUserId = (userId) => {
    return (dispatch) => {
        profileAPI.setUserId(userId)
            .then(data => {
                dispatch(setUserSuccess(data))
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const setStatusProfile = (status) => {
    return (dispatch) => {
        profileAPI.setProfileStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;