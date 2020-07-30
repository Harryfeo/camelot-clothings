import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/Homepage.component';
import Header from './components/header/header.component.jsx';

import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component'
import './App.css';

import { auth } from './firebase/firebase.utils.js';


class  App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unscribeFromAuth = null;

  componentDidMount () {
    this.unscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unscribeFromAuth();
  }


  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
           <Route exact path="/"  component={HomePage} />
           <Route path="/shop"  component={ShopPage} />
           <Route path="/signin"  component={SignInSignOut} />
        </Switch>
      </div> 
     );
  }
  
  
}

export default App;