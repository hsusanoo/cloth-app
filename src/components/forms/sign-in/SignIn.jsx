import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../../button/CustomButton';
import {auth, signInWithGoogle} from "../../../utils/firebase.utils";
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
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async e => {

        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (e) {
            console.error(e);
        }

        this.setState({
            email: '',
            password: '',
        })
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className={'sign-in'}>
                <h2 className={'title'}>I already have an account</h2>
                <span>Sign In with your E-mail and password</span>

                <form onSubmit={this.handleSubmit}>
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
                    <CustomButton type={'submit'} style={{marginTop: 30}}>
                        Submit
                    </CustomButton>
                    <CustomButton isGoogle type={'button'} onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}