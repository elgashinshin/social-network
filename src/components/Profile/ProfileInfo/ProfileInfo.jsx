import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatusHocks";
import ProfileInfoForm from "./ProfileInfoForm";


const ProfileInfo = ({profile, status, setStatus, getStatus, savePhoto, isOwner, updateProfile}) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return (
            <h1>Loading...</h1>
        )
    }

    const changeEditMode = () => {
        setEditMode('true')
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        updateProfile(formData).then(() => {
            setEditMode(false)
        })

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <img className={styles.avatar}
                     src={profile.photos.large}/>
                <div className={styles.name}>{profile.fullName}</div>
            </div>
            {
                isOwner
                && <div>
                    <b>Изменить фото</b>
                    <input onChange={onMainPhotoSelected} type="file"/>
                </div>
            }

            <ProfileStatus isOwner={isOwner} status={status} setStatus={setStatus} getStatus={getStatus}/>

            <div className={styles.descr}>
                <div className={styles.title}>
                    Контактная информация
                </div>
                {
                    editMode ? <ProfileInfoForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                        <ProfileData changeEditMode={changeEditMode} isOwner={isOwner} profile={profile}/>
                }

            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, changeEditMode}) => {
    return (
        <div>
            {
                isOwner && <button onClick={changeEditMode}>Редактировать</button>
            }

            <div className={styles.contact}>
                <div>
                    <b>Полное имя: </b> {profile.fullName}
                </div>
                <div>
                    <b>Обо мне: </b> {profile.aboutMe}
                </div>

                {
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <ProfileContacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        )
                    })
                }
            </div>
            <div className={styles.social}>
                <div className={styles.title}>Работа</div>
                <div>Ищу работу: {profile.lookingForAJob === true ? 'Да =)' : 'Нет =('}</div>
                <div>{profile.lookingForAJob === true ? 'Описание для работы: ' + profile.lookingForAJobDescription : <></>}</div>
            </div>
        </div>
    )
}


export const ProfileContacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle} : </b> {contactValue}
        </div>
    )
}


export default ProfileInfo;