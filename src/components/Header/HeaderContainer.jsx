import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {checkUser, logOut, setLogin, setUser} from "../../redux/login-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
          <Header
              {...this.props}
          />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.header.login,
        auth: state.header.isAuth
    }
}

export default connect(mapStateToProps, {
    checkUser,
    setLogin,
    setUser,
    logOut
})(HeaderContainer);