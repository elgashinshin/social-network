import {connect} from "react-redux";
import {
    currentUsers,
    followSuccess,
    isFetchingToggle,
    setPage,
    setUsers,
    unFollowSuccess,
    userIsFetching,
    getUsers,
    showMoreUsers,
    follow, unFollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.count);
    }

    render() {

        return <Users
            showMoreUsers={this.showMoreUsers.bind(this)}
            maxUsers={this.props.maxUsers}
            count={this.props.count}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            page={this.props.page}
            fetching={this.props.isFetching}
            userIsFetching={this.props.userIsFetching}
            userFetching={this.props.userFetching}
        />
    }

    showMoreUsers() {
        this.props.showMoreUsers(this.props.page, this.props.count);
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        maxUsers: state.usersPage.maxUsers,
        isFetching: state.usersPage.isFetching,
        userFetching: state.usersPage.userIsFetching
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
    getUsers,
    showMoreUsers,
    follow,
    unFollow
})(UsersContainer);