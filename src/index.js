import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let bd = store

let render = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />
        </BrowserRouter>
        , document.getElementById('root')
    );
    reportWebVitals();
}

render(store.getState());

store.subscribe(render);

