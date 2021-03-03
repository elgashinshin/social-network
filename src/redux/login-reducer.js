import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const USER_AUTHORIZED = 'USER-AUTHORIZED';
const SET_LOGIN = 'SET_LOGIN';

let initialState = {
    login: undefined,
    isAuth: false,
    userId: null
}

let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHORIZED:
            return {
                ...state,
                resultCode: action.auth
            }

        case SET_LOGIN:
            return {
                ...state,
                login: action.login,
                userId: action.userId,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

export const checkUser = auth => ({type: USER_AUTHORIZED, auth});
export const setLogin = (login, userId, isAuth) => ({type: SET_LOGIN, login, userId, isAuth});

export const setUser = () => {
    return async (dispatch) => {
            let data = await authAPI.setLogin();
                if (data.resultCode === 0) {
                    dispatch(setLogin(data.data.login, data.data.id, true));
                } else {
                    dispatch(setLogin(null, null, false));
                }
    }
}

export const logIn = (email, password, rememberMe = false) => {
    return async (dispatch) => {
        let response = await authAPI.logIn(email, password, rememberMe)
                if(response.data.resultCode === 0) {
                    dispatch(setUser())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error';
                    dispatch(stopSubmit('login', {_error: message}))
                }
    }
}

export const logOut = () => {
    return async (dispatch) => {
        let response = await authAPI.logOut()
                dispatch(setUser())
    }
}

export default loginReducer;