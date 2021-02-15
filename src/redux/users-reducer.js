let FOLLOW = 'FOLLOW';
let UN_FOLLOW = 'UNFOLLOW';
let SET_USERS = 'SETUSERS';
let SET_PAGE = 'SETPAGE';
let SET_CURRENT_USERS = 'SETCURRENTUSERS';
let IS_FETCHING = 'ISFETCHING';

let initialState = {
    users: [],
    page: 1,
    count: 5,
    maxUsers: 0,
    isFetching: false
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
                    if (u.id === action.userId ) {
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

        default:
            return state;
    }
}

export let follow = userId => ({type: FOLLOW, userId });
export let unFollow = userId => ({type: UN_FOLLOW, userId });
export let setUsers = users => ({type: SET_USERS, users});
export let setPage = page => ({type: SET_PAGE, page});
export let currentUsers = maxUsers => ({type: SET_CURRENT_USERS, maxUsers});
export let isFetchingToggle = fetching => ({type: IS_FETCHING, fetching})

export default usersReducer;