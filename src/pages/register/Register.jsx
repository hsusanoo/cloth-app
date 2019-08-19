import React from 'react';

import SignIn from '../../components/forms/sign-in/SignIn';
import SignUp from '../../components/forms/sign-up/SignUp';

import { RegisterContainer } from './register.styles';

const Register = () => (
    <RegisterContainer>
        <SignIn />
        <SignUp />
    </RegisterContainer>
);

export default Register;
