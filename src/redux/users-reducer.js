import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_PAGE = 'SETPAGE';
const SET_CURRENT_USERS = 'SETCURRENTUSERS';
const IS_FETCHING = 'ISFETCHING';
const USER_IS_FETCHING = 'USERISFETCHING'


let initialState = {
    users: [],
    page: 1,
    count: 5,
    maxUsers: 0,
    isFetching: false,
    userIsFetching: []
}

let usersReducer = (state = initialState, action) => {
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
                users: [...state.users, ...action.users]
            }

        case SET_PAGE:
            return {
                ...state,
                page: action.page
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

        default:
            return state;
    }
}

export const followSuccess = userId => ({type: FOLLOW, userId});
export const unFollowSuccess = userId => ({type: UN_FOLLOW, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setPage = page => ({type: SET_PAGE, page});
export const currentUsers = maxUsers => ({type: SET_CURRENT_USERS, maxUsers});
export const isFetchingToggle = fetching => ({type: IS_FETCHING, fetching});
export const userIsFetching = (fetching, userId) => ({type: USER_IS_FETCHING, fetching, userId});

export const requestUsers = (currentPage, countUsers) => {
    return async (dispatch) => {
        dispatch(isFetchingToggle(true));
        let data = await usersAPI.getUsers(currentPage, countUsers);
        dispatch(isFetchingToggle(false));
        dispatch(setUsers(data.items));
        dispatch(currentUsers(data.totalCount));
    }
}

export const showMoreUsers = (currentPage, countUsers) => {
    return async (dispatch) => {
        dispatch(isFetchingToggle(true));
        let page = currentPage;
        dispatch(setPage(++page));
        let data = await usersAPI.getUsers(page, countUsers)
        dispatch(isFetchingToggle(false));
        dispatch(setUsers(data.items));
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(userIsFetching(true, userId))
        let data = await usersAPI.follow(userId)
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(userIsFetching(false, userId))
    }
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        dispatch(userIsFetching(true, userId))
        let data = await usersAPI.unFollow(userId)
        if (data.resultCode === 0) {
            dispatch(unFollowSuccess(userId));
        }
        dispatch(userIsFetching(false, userId));
    }
}

export default usersReducer;