import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.profilePage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;