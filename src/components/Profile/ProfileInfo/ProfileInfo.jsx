import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatusHocks";



const ProfileInfo = (props) => {
    if(!props.profile) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <img className={styles.avatar}
                     src={props.profile.photos.large}/>
                <div className={styles.name}>{props.profile.fullName}</div>
            </div>

            <ProfileStatus status = {props.status} setStatus={props.setStatus} getStatus = {props.getStatus}/>

            <div className={styles.descr}>
                <div className={styles.contact}>
                    <div className={styles.title}>Contact Information and Social Links</div>
                {/*    */}
                </div>
                <div className={styles.social}>
                    <div className={styles.title}>Jobs</div>
                    <div>Ищу работу: {props.profile.lookingForAJob === true ? 'Да =)' : 'Нет =(' }</div>
                    <div>{props.profile.lookingForAJob === true ? 'Описание для работы: ' + props.profile.lookingForAJobDescription : <></>}</div>
                </div>

            </div>
        </div>
    );
}



export default ProfileInfo;