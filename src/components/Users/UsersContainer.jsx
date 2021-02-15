import {connect} from "react-redux";
import {
    currentUsers,
    follow,
    isFetchingToggle,
    setPage,
    setUsers,
    unFollow,
    userIsFetching
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchingToggle(true);
        usersAPI.getUsers(this.props.page, this.props.count).then(data => {
            this.props.isFetchingToggle(false);
            this.props.setUsers(data.items);
            this.props.currentUsers(data.totalCount);
        })
    }

    render() {

        return <Users
            showMoreUsers={this.showMoreUsers.bind(this)}
            maxUsers={this.props.maxUsers}
            count={this.props.count}
            users={this.props.users}
            unfollow={this.props.unFollow}
            follow={this.props.follow}
            page={this.props.page}
            fetching={this.props.isFetching}
            userIsFetching={this.props.userIsFetching}
            userFetching={this.props.userFetching}
        />
    }

    showMoreUsers() {
        this.props.isFetchingToggle(true);
        let currentPage = this.props.page;
        this.props.setPage(++currentPage);
        usersAPI.getUsers(currentPage, this.props.count).then(data => {
            this.props.isFetchingToggle(false);
            this.props.setUsers(data.items)
        })
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
    follow,
    unFollow,
    setUsers,
    setPage,
    currentUsers,
    isFetchingToggle,
    userIsFetching
})(UsersContainer);