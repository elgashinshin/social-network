import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, setStatusProfile, store, savePhoto, isOwner, updateProfile}) => {
    return (
        <div>
            <div>
                <img className={styles.background} src='https://i.ytimg.com/vi/-ZGlaAxB7nI/maxresdefault.jpg'/>
            </div>


            <div className={styles.wrapper}>
                <ProfileInfo updateProfile={updateProfile} isOwner={isOwner} savePhoto={savePhoto} profile = {profile} status = {status} setStatus = {setStatusProfile}/>
            </div>
            <MyPostsContainer
                store={store}
            />
        </div>
    );
}

export default Profile;