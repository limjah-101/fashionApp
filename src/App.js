import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/homepage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/header';
import Auth from './pages/AuthPage/Auth';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth = null;

    // REGISTER NEW USER IN FIRESTORE
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth) {

                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot( snapShot => {
                    this.setState({ currentUser: { id: snapShot.id, ...snapShot.data()}});
                    console.log("NEW USER",this.state);
                    
                });
            } 
            this.setState({ currentUser: userAuth })                                   
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Header currentUser={ this.state.currentUser }/>
                <Switch>
                    <Route exact path="/" component={ HomePage }/>
                    <Route path="/shop" component={ ShopPage } />
                    <Route path="/signin" component={ Auth } />
                </Switch>                
            </>
        );
    }  
}

export default App;
