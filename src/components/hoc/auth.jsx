import {connect} from "react-redux";
import React from "react";
import {Redirect} from "react-router-dom";

const mapStateToPropsWithAuth = (state) => ({
        isAuth: state.header.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }
    let ConnectWithAuthRedirectComponent = connect(mapStateToPropsWithAuth)(RedirectComponent)
    return ConnectWithAuthRedirectComponent
}