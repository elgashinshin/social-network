import {connect} from "react-redux";
import UsersAPIContainer from "./UsersAPIContainer";
import {currentUsersAC, followAC, setPageAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        maxUsers: state.usersPage.maxUsers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setCurrentUsers: (count) => {
            dispatch(currentUsersAC(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);