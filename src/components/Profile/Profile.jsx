import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger
    return (
        <div>
            <div>
                <img className={styles.background} src='https://i.ytimg.com/vi/-ZGlaAxB7nI/maxresdefault.jpg'/>
            </div>

            <div className={styles.wrapper}>
                <ProfileInfo />
            </div>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;