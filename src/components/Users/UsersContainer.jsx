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
    showMoreUsers,
    follow, unFollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {getCountUsers, getIsFetching, getMaxUsers, getPage, getUserFetching, getUsers} from "../../selectors/selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.page, this.props.count);
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
        users: getUsers(state),
        page: getPage(state),
        count: getCountUsers(state),
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
    showMoreUsers,
    follow,
    unFollow
})(UsersContainer);