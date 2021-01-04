import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>

                <main className='app-wrapper__content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path='/messages' render={() =>
                        <Dialogs
                            // data's
                            dialogsPage={props.state.dialogsPage}
                            newMessage={props.state.dialogsPage.newMessage}
                            // callback's
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </main>
            </div>
    );
}

export default App;
