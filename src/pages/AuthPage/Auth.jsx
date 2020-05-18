import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/signUp';

import './auth.styles.scss';

class Auth extends React.Component {

    //Fade in Effect
    componentDidMount() {
        setTimeout(function() {
            let element = document.querySelector('.section-auth');
            element.classList.add('fade-in');
        }, 100)
    }
    
    render() { 
        return ( 
            <section className="section-auth">
                <SignIn />
                <SignUp  />
            </section>
        );
    }
}
 
export default Auth;