import React from 'react';
import styles from "./Users.module.css";
import userImage from '../../assects/user_image.png'

let Users = (props) => {
debugger
    let maxClickValue = Math.ceil(props.maxUsers / props.count);
    console.log(maxClickValue);
    return (
        <div>
            {
               props.users.map(u =>
                    <div key={u.id} className={styles.wrapper}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userImage} className={styles.photo}/>
                            {
                                u.followed
                                    ? <button className={styles.follow} onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button className={styles.follow} onClick={() => {
                                        props.follow(u.id)
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
            <button onClick={(e) => {props.showMoreUsers()}}>Show more</button>


        </div>
    )
}

export default Users;