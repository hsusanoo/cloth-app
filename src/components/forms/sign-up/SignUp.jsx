import TextField from '@material-ui/core/TextField';
import React from 'react';
import { connect } from "react-redux";
import { signUpStart } from "../../../redux/user/user.actions";

import CustomButton from '../../button/CustomButton';

import {RegisterContainer, StyledTitle, StyledForm} from "../registerForm.styles";

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {signUpStart} = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        signUpStart({displayName,email,password});

    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <RegisterContainer>
                <StyledTitle>New User</StyledTitle>
                <span>Sign up with email</span>
                <StyledForm onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        value={displayName}
                        name="displayName"
                        label="Username"
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        value={email}
                        name="email"
                        label="Email"
                        margin="normal"
                        type={'email'}
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        value={password}
                        name="password"
                        label="Password"
                        margin="normal"
                        type={'password'}
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        value={confirmPassword}
                        name="confirmPassword"
                        label="Confirm password"
                        margin="normal"
                        type={'password'}
                        onChange={this.handleChange}
                    />
                    <CustomButton type={'submit'} style={{ marginTop: 30 }}>SIGN UP</CustomButton>
                </StyledForm>
            </RegisterContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: credentials => dispatch(signUpStart(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
