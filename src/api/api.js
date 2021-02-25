import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '443c2081-68e1-47f1-8871-0ff827aa90d5'
    }
})

export const usersAPI = {
    getUsers(currentPage, countUsers) {
        return instance
            .get(`users?page=${currentPage}&count=${countUsers}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(userId) {
        return instance
            .delete(`follow/${userId}`)
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
    logIn(email, password, rememberMe) {
        return instance
            .post('auth/login', {email, password, rememberMe})

    },
    logOut() {
        return instance
            .delete('auth/login')
    }
}

export const profileAPI = {
    setUserId(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfileStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    setProfileStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    }
}