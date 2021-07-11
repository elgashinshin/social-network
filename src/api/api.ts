import axios from 'axios';
import {UserType} from "../redux/users-reducer";
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {

    }
})

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    ErrorCaptcha = 10
}

type FollowUnfollowType = {
    resultCode: ResultCodes
    messages: Array<string>
    data: {}
}

export const usersAPI = {
    getUsers(currentPage: number, countUsers: number) {
        type getUsersType = {
            items: Array<UserType>
            totalCount: number
            error: null
        }
        return instance
            .get<getUsersType>(`users?page=${currentPage}&count=${countUsers}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: number) {
        return instance
            .post<FollowUnfollowType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(userId: number) {
        return instance
            .delete<FollowUnfollowType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    setLogin() {
        return instance
            .get('auth/me')
            .then(response => {
                return response.data
            })
    },
    logIn(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance
            .post('auth/login', {email, password, rememberMe, captcha})

    },
    logOut() {
        return instance
            .delete('auth/login')
    }
}

export const profileAPI = {
    setUserId(userId: number) {
        return instance
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfileStatus(userId: number) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    setProfileStatus(status: string | null) {
        return instance
            .put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    updatePhoto(photo: any) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance
            .put('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    updateProfileInfo(info: ProfileType) {
        return instance
            .put('profile', info)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance
            .get('security/get-captcha-url')
    }
}