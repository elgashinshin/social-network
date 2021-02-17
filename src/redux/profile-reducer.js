import {profileAPI} from "../api/api";

let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
let ADD_POST = 'ADD-POST';
let SET_USER = 'SETUSER';

let initialState = {
    posts: [
        {post: 'О_О', likeCount: 10},
        {post: 'YOU DIED!', likeCount: 2},
        {post: 'Мой первый пост', likeCount: 15}
    ],
    newTextUpdate: '',
    profile: null
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

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newTextUpdate: action.updateTextPost
            }

        case SET_USER:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostCreator = postValue => ({type: ADD_POST, textPost: postValue});
export const updatePostTextCreator = postText => ({type: UPDATE_POST_TEXT, updateTextPost: postText});
export const setUserSuccess = profile => ({type: SET_USER, profile});

export const setUserId = (userId) => {
    return (dispatch) => {
        profileAPI.setUserId(userId)
            .then(data => {
                dispatch(setUserSuccess(data.data))
            })
    }
}

export default profileReducer;