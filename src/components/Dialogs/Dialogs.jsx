import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let message = React.createRef();

    let sendMessage = () => {
        let messageValue = props.newMessage;
        props.dispatch(sendMessageCreator(messageValue));
    }

    let updateNewText = () => {
        let text = message.current.value;
        props.dispatch(updateMessageTextCreator(text));
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
                <div className={style.wrapper}>
                    <input
                        onChange={updateNewText}
                        value={props.newMessage}
                        ref={message}
                        className={style.text}
                    />
                    <button
                        onClick={sendMessage}
                        className={style.send}
                    >
                        Отправить
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
