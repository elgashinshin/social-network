let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Хай'},
        {id: 3, message: 'Как дела?'}

    ],
        dialogs: [
        {name: 'Darina', id: 1},
        {name: 'Ilya', id: 2},
        {name: 'Sanya', id: 3},
        {name: 'Yura', id: 4},
    ],
        newMessage: ''
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 4, message: action.message}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.updateText
            }
        default:
            return state;
    }
}

export const sendMessageCreator = messageValue => ({type: SEND_MESSAGE, message: messageValue});
export const updateMessageTextCreator = text => ({type: UPDATE_MESSAGE_TEXT, updateText: text});

export default dialogsReducer;