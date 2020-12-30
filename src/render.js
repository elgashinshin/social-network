import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {sendMessage, updateNewMessage} from './redux/state';


export let render = (state) => {
    ReactDOM.render(
        <App state={state} sendMessage={sendMessage} updateNewMessage={updateNewMessage}/>, document.getElementById('root')
    );
    reportWebVitals();
}

