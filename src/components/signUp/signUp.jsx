import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../customBtn/customBtn';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signUp.styles.scss';

class SignUp extends React.Component {
    
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name] : value });
    }

    handleSubmit = async e => {
        e.preventDefault();        
        
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Password don\'t match');
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);            
            
            await createUserProfileDocument(user, { displayName });
            
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(error) {
            console.log(error);
            
        }
    }
    render() { 
        return ( 
            <div className="sign-up">
                <h2 className="title">Don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput  
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        handleChange={ this.handleChange }
                        label="name"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                    /> 
                    
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label="confirm Password"
                    /> 
                    <CustomBtn type="submit">sign up</CustomBtn>
                </form>
            </div>
        );
    }
}
 
export default SignUp;
