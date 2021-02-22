import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";


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
                    <div>{!props.profile.contacts.facebook ? <></> : 'Facebook: ' + props.profile.contacts.facebook}</div>
                    <div>{!props.profile.contacts.website ? <></> : 'Website: ' + props.profile.contacts.website}</div>
                    <div>{!props.profile.contacts.vk ? <></> : 'Вконтакте: ' + props.profile.contacts.vk}</div>
                    <div>{!props.profile.contacts.twitter ? <></> : 'Twitter: ' + props.profile.contacts.twitter}</div>
                    <div>{!props.profile.contacts.instagram ? <></> : 'Instagram: ' + props.profile.contacts.instagram}</div>
                    <div>{!props.profile.contacts.youtube ? <></> : 'Youtube: ' + props.profile.contacts.youtube}</div>
                    <div>{!props.profile.contacts.github ? <></> : 'Github: ' + props.profile.contacts.github}</div>

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