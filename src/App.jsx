import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>

                <main className='app-wrapper__content'>
                    <Route path='/profile' component={() =>
                        <Profile
                            state={props.state.profilePage}
                        />
                    }/>
                    <Route path='/messages' render={() =>
                        <Dialogs
                            state={props.state.dialogsPage}
                            sendMessage={props.sendMessage}
                            newMessage={props.state.dialogsPage.newMessage}
                            updateNewMessage={props.updateNewMessage}
                        />
                    }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
