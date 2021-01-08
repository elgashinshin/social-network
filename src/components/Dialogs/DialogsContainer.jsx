import React from 'react';
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageValue) => dispatch(sendMessageCreator(messageValue)),
        updateNewText: (text) => dispatch(updateMessageTextCreator(text))
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
