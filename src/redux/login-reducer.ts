import {authAPI, securityAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const USER_AUTHORIZED = 'USER-AUTHORIZED'
const SET_LOGIN = 'SET_LOGIN'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

let initialState = {
    login: null as null | string,
    isAuth: false,
    userId: null as null | number,
    captchaUrl: null as null | string,
    resultCode: null as null | number
}

type InitialStateType = typeof initialState

let loginReducer = (state = initialState, action: any): InitialStateType => {
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
            return state
    }
}
type CheckUserActionType = {
    type: typeof USER_AUTHORIZED
    auth: number
}
export const checkUser = (auth: number): CheckUserActionType => ({type: USER_AUTHORIZED, auth})
type SetLoginActionType = {
    type: typeof SET_LOGIN
    login: string | null
    userId: number | null
    isAuth: boolean
}
export const setLogin = (login: string | null, userId: number | null, isAuth: boolean): SetLoginActionType => ({type: SET_LOGIN, login, userId, isAuth})
type GetCaptchaSuccessActionType = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: string
}
export const getCaptchaSuccess = (captchaUrl: string): GetCaptchaSuccessActionType => ({type: GET_CAPTCHA_URL, captchaUrl})

export const setUser = () => {
    return async (dispatch: any) => {
            let data = await authAPI.setLogin()
                if (data.resultCode === 0) {
                    dispatch(setLogin(data.data.login, data.data.id, true))
                } else {
                    dispatch(setLogin(null, null, false))
                }
    }
}

export const logIn = (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
    return async (dispatch: any) => {
        let response = await authAPI.logIn(email, password, rememberMe, captcha)
                if(response.data.resultCode === 0) {
                    dispatch(setUser())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptcha())
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
    }
}

export const logOut = () => {
    return async (dispatch: any) => {
        let response = await authAPI.logOut()
                dispatch(setUser())
    }
}

export const getCaptcha = () => {
    return async (dispatch: any) => {
        let response = await securityAPI.getCaptcha()
        dispatch(getCaptchaSuccess(response.data.url))
    }
}

export default loginReducer