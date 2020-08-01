import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/Homepage.component';
import Header from './components/header/header.component.jsx';

import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';


class  App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unscribeFromAuth = null;

  componentDidMount () {
    this.unscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
        });
          console.log(this.state);
        });       
      }
      this.setState({ currentUser: userAuth});
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
           <Route path="/signin"  component={SignInSignUp} />
        </Switch>
      </div> 
     );
  }
  
  
}

export default App;