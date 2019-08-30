import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../../redux/user/user.actions';

import CustomButton from '../../button/CustomButton';

import {
    RegisterContainer,
    StyledTitle,
    StyledForm,
} from '../registerForm.styles';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <RegisterContainer>
            <StyledTitle>New User</StyledTitle>
            <span>Sign up with email</span>
            <StyledForm onSubmit={handleSubmit}>
                <TextField
                    required
                    value={displayName}
                    name='displayName'
                    label='Username'
                    margin='normal'
                    onChange={handleChange}
                />
                <TextField
                    required
                    value={email}
                    name='email'
                    label='Email'
                    margin='normal'
                    type={'email'}
                    onChange={handleChange}
                />
                <TextField
                    required
                    value={password}
                    name='password'
                    label='Password'
                    margin='normal'
                    type={'password'}
                    onChange={handleChange}
                />
                <TextField
                    required
                    value={confirmPassword}
                    name='confirmPassword'
                    label='Confirm password'
                    margin='normal'
                    type={'password'}
                    onChange={handleChange}
                />
                <CustomButton type={'submit'} style={{ marginTop: 30 }}>
                    SIGN UP
                </CustomButton>
            </StyledForm>
        </RegisterContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: credentials => dispatch(signUpStart(credentials)),
});

export default connect(
    null,
    mapDispatchToProps
)(SignUp);
