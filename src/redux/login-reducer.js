import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const USER_AUTHORIZED = 'USER-AUTHORIZED';
const SET_LOGIN = 'SET_LOGIN';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    login: undefined,
    isAuth: false,
    userId: null,
    captchaUrl: null
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

        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }

        default:
            return state;
    }
}

export const checkUser = auth => ({type: USER_AUTHORIZED, auth});
export const setLogin = (login, userId, isAuth) => ({type: SET_LOGIN, login, userId, isAuth});
export const getCaptchaSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl});

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

export const logIn = (email, password, rememberMe = false, captcha = null) => {
    return async (dispatch) => {
        debugger
        let response = await authAPI.logIn(email, password, rememberMe, captcha)
                if(response.data.resultCode === 0) {
                    dispatch(setUser())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptcha())
                    }
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

export const getCaptcha = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptcha()
        dispatch(getCaptchaSuccess(response.data.url))
    }
}

export default loginReducer;