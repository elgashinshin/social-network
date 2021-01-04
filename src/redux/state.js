let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
let ADD_POST = 'ADD-POST'

let store = {
    _state: {
        profilePage: {
            posts: [
                {post: 'О_О', likeCount: 10},
                {post: 'YOU DIED!', likeCount: 2},
                {post: 'Мой первый пост', likeCount: 15}
            ],
            newTextUpdate: ''
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
        if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                message: action.message
            }

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessage = action.updateText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST) {
            let newPost = {
                post: action.textPost,
                likeCount: 0
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextUpdate = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newTextUpdate = action.updateTextPost;
            this._callSubscriber(this._state);
        }
    }
}

export const sendMessageCreator = messageValue => ({type: SEND_MESSAGE, message: messageValue});
export const updateMessageTextCreator = text => ({type: UPDATE_MESSAGE_TEXT, updateText: text});
export const addPostCreator = postValue => ({type: ADD_POST, textPost: postValue});
export const updatePostTextCreator = postText => ({type: UPDATE_POST_TEXT, updateTextPost: postText});

export default store;