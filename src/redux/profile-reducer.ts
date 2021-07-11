import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ContactsType, PhotosType, ProfileType, PostType} from '../types/types'

let ADD_POST = 'ADD-POST';
let SET_USER = 'SET-USER';
let SET_STATUS = 'SET-STATUS';
let SAVE_PHOTO = 'SAVE_PHOTO';
let UPDATE_PROFILE = 'UPDATE_PROFILE';


let initialState = {
    posts: [
    ] as Array<PostType>,
    newTextUpdate: '',
    profile: null as ProfileType | null,
    status: ''
}

type InitialStateType = typeof initialState

let profileReducer = (state = initialState, action: any): InitialStateType => {
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
                } as ProfileType
            }
        default:
            return state;
    }
}

type ActionsTypes =
    AddPostCreatorActionType
    | SetUserSuccessActionType
    | SetStatusActionType
    | SavePhotoSuccessActionType
    | UpdateProfileSuccessActionType

type AddPostCreatorActionType = {
    type: typeof ADD_POST
    textPost: string
}
export const addPostCreator = (postValue: string): AddPostCreatorActionType => ({type: ADD_POST, textPost: postValue});
type SetUserSuccessActionType = {
    type: typeof SET_USER
    profile: ProfileType
}
export const setUserSuccess = (profile: ProfileType): SetUserSuccessActionType => ({type: SET_USER, profile});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO, photos});
type UpdateProfileSuccessActionType = {
    type: typeof SAVE_PHOTO
    info: ProfileType
}
export const updateProfileSuccess = (info: ProfileType): UpdateProfileSuccessActionType => ({type: SAVE_PHOTO, info});

export const setUserId = (userId: number) => {
    return async (dispatch: any) => {
        let data = await profileAPI.setUserId(userId)
        dispatch(setUserSuccess(data))
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: any) => {
        let data = await profileAPI.getProfileStatus(userId)
        dispatch(setStatus(data))
    }
}

export const setStatusProfile = (status: string) => {
    return async (dispatch: any) => {
        let data = await profileAPI.setProfileStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (photo: any) => {
    return async (dispatch: any) => {
        debugger
        let response = await profileAPI.updatePhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const updateProfile = (info: ProfileType) => {
    return async (dispatch: any, getState: any) => {
        let userId = getState().header.userId;
        let response = await profileAPI.updateProfileInfo(info)
        if (response.data.resultCode === 0) {
            dispatch(setUserId(userId))
        } else {
            let message = response.data.messages[0]
            let number = message.indexOf('->');
            let messageLength = message.length;
            let newMessage = message.slice(number + 2, messageLength - 1)
            let test = newMessage.toLowerCase();

            dispatch(stopSubmit('profilieInfo', {
                'contacts': {
                    [test]: response.data.messages[0]
                }
            }))
            return Promise.reject();
        }
    }
}

export default profileReducer