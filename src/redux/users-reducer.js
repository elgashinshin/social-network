let FOLLOW = 'FOLLOW';
let UN_FOLLOW = 'UNFOLLOW';
let SET_USERS = 'SETUSERS';

let initialState = {
    users: []

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

        default:
            return state;
    }
}

export let followAC = userId => ({type: FOLLOW, userId });
export let unFollowAC = userId => ({type: UN_FOLLOW, userId });
export let setUsersAC = users => ({type: SET_USERS, users});

export default usersReducer;