import {render} from "../render";

let state = {
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
        newMessage: 'Привет'
    }
}

export let sendMessage = (message) => {
    let newMessage = {
        id: 4,
        message: message
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    render(state);
}

export let updateNewMessage = (message) => {
    state.dialogsPage.newMessage = message;
    render(state);
}

export default state;