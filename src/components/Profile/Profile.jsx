import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {getStatus, setStatusProfile} from "../../redux/profile-reducer";

const Profile = (props) => {
    return (
        <div>
            <div>
                <img className={styles.background} src='https://i.ytimg.com/vi/-ZGlaAxB7nI/maxresdefault.jpg'/>
            </div>

            <div className={styles.wrapper}>
                <ProfileInfo profile = {props.profile} status = {props.status} setStatus = {props.setStatusProfile}/>
            </div>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;