export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPage = (state) => {
    return state.usersPage.currentPage
}

export const getCountUsers = (state) => {
    return state.usersPage.usersCount
}

export const getMaxUsers = (state) => {
    return state.usersPage.maxUsers
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getUserFetching = (state) => {
    return state.usersPage.userIsFetching
}

