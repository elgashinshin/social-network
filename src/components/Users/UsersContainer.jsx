import {connect} from "react-redux";
import {
    currentUsers,
    followSuccess,
    isFetchingToggle,
    setPage,
    setUsers,
    unFollowSuccess,
    userIsFetching,
    requestUsers,
    follow, unFollow, onPageChange
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {getCountUsers, getIsFetching, getMaxUsers, getPage, getUserFetching, getUsers} from "../../selectors/selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.usersCount);
    }

    render() {

        return <Users
            maxUsers={this.props.maxUsers}
            usersCount={this.props.usersCount}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            currentPage={this.props.currentPage}
            fetching={this.props.isFetching}
            userIsFetching={this.props.userIsFetching}
            userFetching={this.props.userFetching}
            onPageChange={this.props.onPageChange}
        />
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getPage(state),
        usersCount: getCountUsers(state),
        maxUsers: getMaxUsers(state),
        isFetching: getIsFetching(state),
        userFetching: getUserFetching(state)
    }
}

export default connect(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setUsers,
    setPage,
    currentUsers,
    isFetchingToggle,
    userIsFetching,
    requestUsers,
    follow,
    unFollow,
    onPageChange
})(UsersContainer);