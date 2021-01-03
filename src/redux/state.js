let sendMessage = 'SEND-MESSAGE';
let updateMessageText = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {post: 'О_О', likeCount: 10},
                {post: 'YOU DIED!', likeCount: 2},
                {post: 'Мой первый пост', likeCount: 15}
            ]
        },
        dialogsPage: {
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
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        debugger;
        if (action.type === sendMessage) {
            let newMessage = {
                id: 4,
                message: action.message
            }

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === updateMessageText) {
            this._state.dialogsPage.newMessage = action.updateText;
            this._callSubscriber(this._state);
        }
    }
}

export const sendMessageCreator = messageValue => ({type: sendMessage, message: messageValue});
export const updateMessageTextCreator = text => ({type: updateMessageText, updateText: text});

export default store;