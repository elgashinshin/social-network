import React from "react";
import {Field, reduxForm} from "redux-form";
import {isEmpty, maxLengthCreator} from "../../utils/validators/form-validators";
import {Input} from "../FormControls/FormControls";
import {connect} from "react-redux";
import {logIn} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";


const Login = ({logIn, isAuth, captchaUrl}) => {
    let onSubmit = (formData) => {
        debugger
        logIn(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth === true) {
        return (
            <Redirect to={'/profile'}/>
        )
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    let maxLength10 = maxLengthCreator(10)
    return (
        <form onSubmit={handleSubmit}>
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
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && <Field component={Input} name={'captcha'} validate={[isEmpty]} placeholder={'Введите символы'} />}
            {
                error && <div>
                    {error}
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
    isAuth: state.header.isAuth,
    captchaUrl: state.header.captchaUrl
})


export default connect(mapStateToProps, {logIn})(Login);
