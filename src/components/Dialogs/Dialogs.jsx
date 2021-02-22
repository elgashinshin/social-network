import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let sendMessage = (values) => {
        console.log(values.message)
        props.sendMessage(values.message);
    }

    let names = props.dialogsPage.dialogs.map(n => <DialogsItem name={n.name} id={n.id}/>);
    let messages = props.dialogsPage.messages.map(m => <Messages message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__wrapper}>
                {names}
            </div>
            <div className={style.dialogs__messages}>
                {messages}
                <MessageFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.wrapper}>
            <Field component={'textarea'} name={'message'} className={style.text}/>
            <button className={style.send}> Отправить </button>
        </form>
    )
}

const MessageFormRedux = reduxForm({
    form: 'addMessage'
})(MessageForm)

export default Dialogs;
