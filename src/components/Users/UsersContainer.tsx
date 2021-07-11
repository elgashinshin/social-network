import {connect} from "react-redux";
import {
    userIsFetching,
    requestUsers,
    follow, unFollow, onPageChange, UserType, UserIsFetchingActionType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {getCountUsers, getIsFetching, getMaxUsers, getPage, getUserFetching, getUsers} from "../../selectors/selectors";
import {AppStateType} from "../../redux/redux-store";

type MapPropsType = {
    users: Array<UserType>
    currentPage: number
    usersCount: number
    maxUsers: number
    isFetching: boolean
    userFetching: Array<number>
}
type DispatchPropsType = {
    requestUsers: (currentPage: number, countUsers: number) => void
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    userIsFetching: (fetching: boolean, userId: number) => void
    onPageChange: (currentPage: number) => void
}
type OwnPropsType = {

}
type PropsType = MapPropsType & DispatchPropsType

class UsersContainer extends React.Component<PropsType> {
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
            userFetching={this.props.userFetching}
            onPageChange={this.props.onPageChange}
        />
    }

}

let mapStateToProps = (state: AppStateType) : MapPropsType => {
    return {
        users: getUsers(state),
        currentPage: getPage(state),
        usersCount: getCountUsers(state),
        maxUsers: getMaxUsers(state),
        isFetching: getIsFetching(state),
        userFetching: getUserFetching(state)
    }
}
//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
export default connect<MapPropsType, DispatchPropsType, OwnPropsType, AppStateType >(mapStateToProps, {
    userIsFetching,
    requestUsers,
    follow,
    unFollow,
    onPageChange
} as DispatchPropsType)(UsersContainer);