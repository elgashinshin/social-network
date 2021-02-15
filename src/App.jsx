import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>

                <main className='app-wrapper__content'>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>
                    }/>
                    <Route path='/messages' render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/settings' component={Settings}/>
                </main>
            </div>
    );
}

export default App;
