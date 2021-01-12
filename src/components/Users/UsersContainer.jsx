import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;