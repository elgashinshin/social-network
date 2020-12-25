import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let name = props.name;
    let path = 'messages/'+props.id;

    return(
        <div className={s.dialogs__item}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

const Messages = (props) => {
    let message = props.message;

    return (
        <div className={s.message}>{message}</div>
    );

}

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs__wrapper}>
                    <DialogsItem name='Darina' id='1'/>
                    <DialogsItem name='Ilya' id='2'/>
                    <DialogsItem name='Sanya' id='3'/>
                    <DialogsItem name='Yura' id='4'/>
                    <a href='/profile'>test</a>
                </div>
                <div className={s.messages}>
                    <Messages message='Привет'/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
