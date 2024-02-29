import React from 'react';
import MyButton from "../MyButton/MyButton";
import {Field, reduxForm} from "redux-form";


const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <Field placeholder={'Login'} component={'input'} name={'login'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <MyButton name={'Login'}/>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
export default Login;