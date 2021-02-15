import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {checkUser, setLogin} from "../../redux/header-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
          <Header
              {...this.props}
              clickOnLogin={this.clickOnLogin.bind(this)}
          />
        );
    }
    clickOnLogin() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                debugger
                this.props.checkUser(response.data.resultCode);
                this.props.setLogin(response.data.data.login);
            })
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.header.login,
        auth: state.header.resultCode
    }
}

export default connect(mapStateToProps, {
    checkUser,
    setLogin
})(HeaderContainer);