let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let dialogsReduced = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 4, message: action.message}
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessage = action.updateText;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = messageValue => ({type: SEND_MESSAGE, message: messageValue});
export const updateMessageTextCreator = text => ({type: UPDATE_MESSAGE_TEXT, updateText: text});

export default dialogsReduced;