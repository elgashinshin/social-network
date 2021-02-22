import React from "react";
import {Field, reduxForm} from "redux-form";
import {isEmpty, maxLengthCreator} from "../../utils/validators/form-validators";
import {Input} from "../FormControls/FormControls";


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
    let maxLength10 = maxLengthCreator(10)
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={"login"}>
                <Field validate={[isEmpty]} component={Input} name={'username'} placeholder={'Write username'} />
            </div>
            <br/>
            <div className="password">
                <Field validate={isEmpty} component={Input} name={'password'} placeholder={'Write password'} />
            </div>
            <br/>
            <div className="rememberMe">
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> <span>RememberMe</span>
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