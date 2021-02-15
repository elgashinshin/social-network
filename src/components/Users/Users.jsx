import React from 'react';
import styles from "./Users.module.css";
import userImage from '../../assects/user_image.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import * as axios from "axios";

let Users = (props) => {
    let maxClickValue = Math.ceil(props.maxUsers / props.count);
    console.log(maxClickValue);
    return (
        <div>
            {
               props.users.map(u =>
                    <div key={u.id} className={styles.wrapper}>
                        <div className={styles.userImageWrapper}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userImage} className={styles.photo}/>
                            </NavLink>
                            {
                                u.followed
                                    ? <button className={styles.follow} onClick={() => {
                                        axios
                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                                headers: {
                                                    'API-KEY': '443c2081-68e1-47f1-8871-0ff827aa90d5'
                                                },
                                                withCredentials: true
                                            })
                                            .then(response => {
                                                debugger
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                            })

                                    }}>Unfollow</button>
                                    : <button className={styles.follow} onClick={() => {
                                        axios
                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                            headers: {
                                                'API-KEY': '443c2081-68e1-47f1-8871-0ff827aa90d5'
                                            },
                                            withCredentials: true
                                        })
                                            .then(response => {
                                                debugger
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                            })
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
            {
                props.fetching ? 'Loading...' : <button onClick={(e) => {props.showMoreUsers()}}>Show more</button>
            }



        </div>
    )
}

export default Users;