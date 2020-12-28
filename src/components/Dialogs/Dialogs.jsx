import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';




const Dialogs = (props) => {


    let names = props.state.dialogs.map(n => <DialogsItem name={n.name} id={n.id}/>);
    let messages = props.state.messages.map(m => <Messages message={m.message}/>);


    return (
            <div className={style.dialogs}>
                <div className={style.dialogs__wrapper}>
                    {names}
                </div>
                <div className={style.dialogs__messages}>
                    {messages}
                    <input placeholder='Write the message' className={style.text}/>
                </div>
            </div>
    );
}

export default Dialogs;
