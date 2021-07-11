import {ResultCodes, usersAPI} from "../api/api";
import {PhotosType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_PAGE = 'SETPAGE';
const SET_CURRENT_USERS = 'SETCURRENTUSERS';
const IS_FETCHING = 'ISFETCHING';
const USER_IS_FETCHING = 'USERISFETCHING';
const CHANGE_PAGE = 'CHANGE_PAGE';

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    usersCount: 10,
    maxUsers: 0,
    isFetching: false,
    userIsFetching: [] as Array<number>
}

type InitialStateType = typeof initialState

let usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }

                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case SET_CURRENT_USERS:
            return {
                ...state,
                maxUsers: action.maxUsers
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching
            }

        case USER_IS_FETCHING:
            return {
                ...state,
                userIsFetching: action.fetching ? [...state.userIsFetching, action.userId] : state.userIsFetching.filter(id => id !== action.userId)
            }

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        default:
            return state;
    }
}

type ActionTypes =
    PageChangeActionType
    | FollowSuccessActionType
    | UnFollowSuccessActionType
    | SetUsersActionType
    | SetPageActionType
    | CurrentUsersActionType
    | IsFetchingToggleActionType
    | UserIsFetchingActionType

type PageChangeActionType = {
    type: typeof CHANGE_PAGE
    page: number
}
export const pageChange = (page: number): PageChangeActionType => ({type: CHANGE_PAGE, page})
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});
type UnFollowSuccessActionType = {
    type: typeof UN_FOLLOW
    userId: number
}
export const unFollowSuccess = (userId: number): UnFollowSuccessActionType => ({type: UN_FOLLOW, userId});
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});
type SetPageActionType = {
    type: typeof SET_PAGE
    page: number
}
export const setPage = (page: number): SetPageActionType => ({type: SET_PAGE, page});
type CurrentUsersActionType = {
    type: typeof SET_CURRENT_USERS
    maxUsers: number
}
export const currentUsers = (maxUsers: number): CurrentUsersActionType => ({type: SET_CURRENT_USERS, maxUsers});
type IsFetchingToggleActionType = {
    type: typeof IS_FETCHING
    fetching: boolean
}
export const isFetchingToggle = (fetching: boolean): IsFetchingToggleActionType => ({type: IS_FETCHING, fetching});
export type UserIsFetchingActionType = {
    type: typeof USER_IS_FETCHING
    fetching: boolean
    userId: number
}
export const userIsFetching = (fetching: boolean, userId: number): UserIsFetchingActionType => ({
    type: USER_IS_FETCHING,
    fetching,
    userId
});

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const onPageChange = (currentPage: number): ThunkActionType => {
    return async (dispatch) => {
        await usersAPI.getUsers(currentPage, initialState.usersCount)
        dispatch(pageChange(currentPage))
        dispatch(requestUsers(currentPage, initialState.usersCount))
    }
}

export const requestUsers = (currentPage: number, countUsers: number): ThunkActionType => {
    return async (dispatch) => {
        dispatch(isFetchingToggle(true));
        let data = await usersAPI.getUsers(currentPage, countUsers);
        dispatch(isFetchingToggle(false));
        dispatch(setUsers(data.items));
        dispatch(currentUsers(data.totalCount));
    }
}

export const follow = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        dispatch(userIsFetching(true, userId))
        let data = await usersAPI.follow(userId)
        if (data.resultCode === ResultCodes.Success) {
            dispatch(followSuccess(userId));
        }
        dispatch(userIsFetching(false, userId))
    }
}

export const unFollow = (userId: number): ThunkActionType => {
    return async (dispatch: any) => {
        dispatch(userIsFetching(true, userId))
        let data = await usersAPI.unFollow(userId)
        if (data.resultCode === ResultCodes.Success) {
            dispatch(unFollowSuccess(userId));
        }
        dispatch(userIsFetching(false, userId));
    }
}

export default usersReducer;