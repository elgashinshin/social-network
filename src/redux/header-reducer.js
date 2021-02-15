const USER_AUTHORIZED = 'USER-AUTHORIZED';
const SET_LOGIN = 'SET_LOGIN';

let initialState = {
    login: undefined,
    resultCode: 1
}

let headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHORIZED:
            return {
                ...state,
                resultCode: action.auth
            }

        case SET_LOGIN:
            return {
                ...state,
                login: action.login
            }
        default:
            return state;
    }
}

export const checkUser = auth => ({type: USER_AUTHORIZED, auth});
export const setLogin = login => ({type: SET_LOGIN, login});

export default headerReducer;