import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../../button/CustomButton';
import {signInWithGoogle} from "../../../utils/firebase.utils";
import './sign-in.scss';

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        console.log(name, value);
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: '',
        })
    };

    render() {
        return (
            <div className={'sign-in'}>
                <h2 className={'title'}>I already have an account</h2>
                <span>Sign In with your E-mail and password</span>

                <form onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        value={this.state.email}
                        name="email"
                        label="Email"
                        margin="normal"
                        type={'email'}
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        value={this.state.password}
                        name="password"
                        label="Password"
                        margin="normal"
                        type={'password'}
                        onChange={this.handleChange}
                    />
                    <CustomButton type={'submit'} style={{marginTop: 30}}>
                        Submit
                    </CustomButton>
                    <CustomButton isGoogle onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}