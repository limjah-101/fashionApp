import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import './signIn.styles.scss';
import CustomBtn from '../customBtn/customBtn';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
    
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            emailErrorMsg: '',
            pwdErrorMsg: ''
        }
    }
    

    handleChange = e => {
        this.setState({emailErrorMsg: '', pwdErrorMsg: ''})
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state);
        const { email, password } = this.state;
        //
        if(email == '' && password == ''){
            this.setState({ emailErrorMsg: "Email is required", pwdErrorMsg: "Password is required" })
            return false;
        }
        try{
            
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            window.location = '/';
        }catch(error){
            console.log(error.message);
        }
        
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
                        label="email *"
                    />
                    {this.state.emailErrorMsg ? <span className="errMsg">{ this.state.emailErrorMsg }</span> : ''}
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password *"
                        />        
                        {this.state.pwdErrorMsg ? <span className="errMsg">{ this.state.pwdErrorMsg }</span> : ''}        
                    <div className="form-footer">
                        <CustomBtn type="submit">sign in</CustomBtn>
                        <CustomBtn isGoogleBtn={true} onClick={ signInWithGoogle }>Google Sign In</CustomBtn>
                    </div>
                    
                </form>
            </div>
        );
    }
}
 
export default SignIn;