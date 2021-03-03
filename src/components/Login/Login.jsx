import React from "react";
import {Field, reduxForm} from "redux-form";
import {isEmpty, maxLengthCreator} from "../../utils/validators/form-validators";
import {Input} from "../FormControls/FormControls";
import {connect} from "react-redux";
import {logIn} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    let onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth === true) {
        return (
            <Redirect to={'/profile'}/>
        )
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    let maxLength10 = maxLengthCreator(10)
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={"login"}>
                <Field validate={[isEmpty]} component={Input} name={'email'} placeholder={'Write username'}/>
            </div>
            <br/>
            <div className="password">
                <Field validate={isEmpty} component={Input} name={'password'} placeholder={'Write password'}
                       type={'password'}/>
            </div>
            <br/>
            <div className="rememberMe">
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> <span>RememberMe</span>
            </div>
            <br/>
            {
                props.error && <div>
                    {props.error}
                </div>
            }
            <div className="submit">
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.header.isAuth
})


export default connect(mapStateToProps, {logIn})(Login);
