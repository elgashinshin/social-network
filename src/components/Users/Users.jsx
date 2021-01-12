import React from 'react';
import UserItem from "./UserItem/UserItem";
import styles from "./Users.module.css";
import dialogsReducer from "../../redux/dialogs-reducer";
import * as axios from "axios";
import userImage from '../../assects/user_image.png'

class Users extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={styles.wrapper}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userImage} className={styles.photo}/>
                                {
                                    u.followed
                                        ? <button className={styles.follow} onClick={() => {
                                            this.props.unFollow(u.id)
                                        }}>Unfollow</button>
                                        : <button className={styles.follow} onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>
                                }
                            </div>
                            <div className={styles.fullName}>{u.name}</div>
                            <div className={styles.status}>{u.status}</div>
                            <div className={styles.country}>{u.country}</div>
                            <div className={styles.city}>{u.city}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;