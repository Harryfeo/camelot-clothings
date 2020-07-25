import React from 'react';
import { Route, Switch } from 'react-router-dom';


import HomePage from './pages/homepage/Homepage.component';
import './App.css';


const HatsPage =() => (
  <div>
      <h1>The Hats page</h1>
  </div>
);

function App() {
  return (
   <div>
     <switch>
      <Route exact path="/"  component={HomePage} />
      <Route path="/hats"  component={HatsPage} />
     </switch>
   </div> 
  );
}

export default App;