import React from 'react';
import SignIn from '../../components/forms/sign-in/SignIn';
import './register.scss';
import SignUp from "../../components/forms/sign-up/SignUp";

const Register = () =>
    <div className={'register'}>
        <SignIn/>
        <SignUp/>
    </div>
;

export default Register;