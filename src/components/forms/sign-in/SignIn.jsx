import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    emailSignInStart,
    googleSignInStart,
} from '../../../redux/user/user.actions';

import CustomButton from '../../button/CustomButton';

import {
    RegisterContainer,
    StyledTitle,
    StyledForm,
} from '../registerForm.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleChange = e => {
        const { value, name } = e.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email, password);
    };

    return (
        <RegisterContainer>
            <StyledTitle>I already have an account</StyledTitle>
            <span>Sign In with your E-mail and password</span>

            <StyledForm onSubmit={handleSubmit}>
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
                <CustomButton type={'submit'} style={{ marginTop: 30 }}>
                    Submit
                </CustomButton>
                <CustomButton
                    isGoogle
                    type={'button'}
                    onClick={googleSignInStart}
                >
                    Sign in with Google
                </CustomButton>
            </StyledForm>
        </RegisterContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);
