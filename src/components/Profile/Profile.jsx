import React from 'react';
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={p.background} src='https://i.ytimg.com/vi/-ZGlaAxB7nI/maxresdefault.jpg'></img>
            </div>

            <div className={p.wrapper}>
                <ProfileInfo/>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;