let SEND_MESSAGE = 'SEND-MESSAGE';

type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    name: string
    id: number
}

let initialState = {
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Хай'},
        {id: 3, message: 'Как дела?'}

    ] as Array<MessagesType>,
    dialogs: [
        {name: 'Darina', id: 1},
        {name: 'Ilya', id: 2},
        {name: 'Sanya', id: 3},
        {name: 'Yura', id: 4},
    ] as Array<DialogsType>
}

type InitialStateType = typeof initialState

let dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 4, message: action.message}
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    message: string
}
export const sendMessageCreator = (messageValue: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, message: messageValue});

export default dialogsReducer;