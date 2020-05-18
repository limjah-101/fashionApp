import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import './signIn.styles.scss';
import CustomBtn from '../customBtn/customBtn';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        
        this.setState({email: '', password: ''})
    }
    render() { 
        return ( 
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Singn in with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        handleChange={ this.handleChange }
                        label="email"
                    />
                                    
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        />                
                    <div className="form-footer">
                        <CustomBtn type="submit">sign in</CustomBtn>
                        <CustomBtn onClick={ signInWithGoogle }>sign in with Google</CustomBtn>
                    </div>
                    
                </form>
            </div>
        );
    }
}
 
export default SignIn;