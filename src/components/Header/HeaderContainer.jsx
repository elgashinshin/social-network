import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {checkUser, setLogin, setUser} from "../../redux/header-reducer";

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
        this.props.setUser()
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
    setLogin,
    setUser
})(HeaderContainer);