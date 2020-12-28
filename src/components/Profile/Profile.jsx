import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div>
                <img className={styles.background} src='https://i.ytimg.com/vi/-ZGlaAxB7nI/maxresdefault.jpg'></img>
            </div>

            <div className={styles.wrapper}>
                <ProfileInfo/>
            </div>
            <MyPosts post={props.state.posts} />
        </div>
    );
}

export default Profile;