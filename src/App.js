import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/homepage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/header';
import Auth from './pages/AuthPage/Auth';

function App() {
  return (
    <>
        <Header />
        <Switch>
            <Route exact path="/" component={ HomePage }/>
            <Route path="/shop" component={ ShopPage } />
            <Route path="/signin" component={ Auth } />
        </Switch>
        
    </>
);
}

export default App;
