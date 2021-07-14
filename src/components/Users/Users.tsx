import React, {Props} from 'react';
import styles from "./Users.module.css";
import userImage from '../../assects/user_image.png'
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator/Paginator";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    onPageChange: (currentPage: number) => void
    users: Array<UserType>
    userFetching: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    currentPage: number
    maxUsers: number
    usersCount: number
}

let Users: React.FC<PropsType> = ({onPageChange, users, userFetching, unFollow, follow, currentPage, maxUsers, usersCount}) => {

    return (
        <div>
            {
                users.map(u =>
                    <div key={u.id} className={styles.wrapper}>
                        <div className={styles.userImageWrapper}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userImage}
                                     className={styles.photo}/>
                            </NavLink>
                            {
                                u.followed
                                    ? <button disabled={userFetching.some(id => id === u.id)} className={styles.follow}
                                              onClick={() => {
                                                  unFollow(u.id)
                                              }}>Отписаться</button>
                                    : <button disabled={userFetching.some(id => id === u.id)} className={styles.follow}
                                              onClick={() => {
                                                  follow(u.id)
                                              }}>Подписаться</button>
                            }
                        </div>
                        <div className={styles.fullName}>{u.name}</div>
                        <div className={styles.status}>{u.status}</div>
                    </div>
                )
            }
            <Paginator onPageChange={onPageChange} currentPage={currentPage} totalItemsCount={maxUsers}
                       usersCount={usersCount}/>


        </div>
    )
}

export default Users;