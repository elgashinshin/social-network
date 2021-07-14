import React from 'react';
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";
import {isEmpty} from "../../../utils/validators/form-validators";
import {Input} from "../../FormControls/FormControls";
import styles from "./ProfileInfo.module.css";


const ProfileInfoForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Сохранить</button>
            <br/>
            <div>
                <b>Полное имя: </b>
                <Field name={'fullName'} component={Input}/>
            </div>
            <div>
                <b>Обо мне: </b>
                <Field validate={[isEmpty]} name={'aboutMe'} component={Input}/>
            </div>
            {
                Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            <b>{key}</b>
                            <Field component={Input} name={'contacts.' + key}/>
                        </div>
                    )
                })
            }
            <div className={styles.social}>
                <div className={styles.title}>Работа</div>
                <div>
                    Ищу работу: <Field component={Input} name={'lookingForAJob'} type={'checkbox'}/>
                </div>
                <div>
                    Описание для работы:
                    <Field component={Input} name={'lookingForAJobDescription'}/>
                </div>
            </div>

        </form>
    )
}

const ProfileInfoReduxForm = reduxForm({form: 'profilieInfo'})(ProfileInfoForm)

export default ProfileInfoReduxForm
