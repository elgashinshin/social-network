import React from 'react';
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import dialogsReducer from "../../redux/dialogs-reducer";
import * as axios from "axios";
import userImage from '../../assects/user_image.png'
import Users from "./Users";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentUsers(response.data.totalCount);
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
        />
    }

    showMoreUsers() {
        let currentPage = this.props.page;
        this.props.setPage(++currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }
}

export default UsersAPIContainer;