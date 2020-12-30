import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';




const Dialogs = (props) => {
    let message = React.createRef();

    let sendMessage = () => {
        let messageValue = props.newMessage;
        props.sendMessage(messageValue);
        props.updateNewMessage('');
    }

    let updateNewMessage = () => {
        let text = message.current.value;
        props.updateNewMessage(text);
    }

    let names = props.state.dialogs.map(n => <DialogsItem name={n.name} id={n.id}/>);
    let messages = props.state.messages.map(m => <Messages message={m.message}/>);


    return (
            <div className={style.dialogs}>
                <div className={style.dialogs__wrapper}>
                    {names}
                </div>
                <div className={style.dialogs__messages}>
                    {messages}
                    <div className={style.wrapper}>
                        <input
                            onChange={updateNewMessage}
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
