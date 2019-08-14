import React from 'react';
import SignIn from '../../components/forms/sign-in/SignIn';
import SignUp from '../../components/forms/sign-up/SignUp';
import './register.scss';

const Register = () => (
    <div className='register'>
        <SignIn />
        <SignUp />
    </div>
);

export default Register;
