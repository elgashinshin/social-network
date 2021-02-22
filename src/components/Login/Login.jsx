import React from "react";
import {Field, reduxForm} from "redux-form";


const Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={"login"}>
                <Field component={'input'} name={'username'} placeholder={'Write username'} />
            </div>
            <br/>
            <div className="password">
                <Field component={'input'} name={'password'} placeholder={'Write password'} />
            </div>
            <br/>
            <div className="rememberMe">
                <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> RememberMe
            </div>
            <br/>
            <div className="submit">
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
export default Login;