import React from 'react';
import MyButton from "../MyButton/MyButton";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";



const Login = (props) => {
    const onSubmit  = (formData) =>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} component={Input} name={'login'} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
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