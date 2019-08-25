import TextField from '@material-ui/core/TextField';
import React from 'react';
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../../redux/user/user.actions";

import CustomButton from '../../button/CustomButton';

import {RegisterContainer, StyledTitle, StyledForm} from "../registerForm.styles";

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async e => {

        e.preventDefault();
        const {emailSignInStart} = this.props;
        const { email, password } = this.state;

        emailSignInStart(email,password);

    };

    render() {
        const { email, password } = this.state;
        const {googleSignInStart} = this.props;
        return (
            <RegisterContainer>
                <StyledTitle>I already have an account</StyledTitle>
                <span>Sign In with your E-mail and password</span>

                <StyledForm onSubmit={this.handleSubmit}>
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
                    <CustomButton type={'submit'} style={{ marginTop: 30 }}>
                        Submit
                    </CustomButton>
                    <CustomButton isGoogle type={'button'} onClick={googleSignInStart}>
                        Sign in with Google
                    </CustomButton>
                </StyledForm>
            </RegisterContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);
