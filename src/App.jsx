import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {setUser} from "./redux/login-reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) return <div></div>

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>

                <main className='app-wrapper__content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
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
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404</div>}/>
                    </Switch>
                </main>

            </div>

        );
    }
}

let mapStateToProps = (state) => ({
    initialize: state.app.initialize
})

export default connect(mapStateToProps, {initializeApp, setUser})(App);
