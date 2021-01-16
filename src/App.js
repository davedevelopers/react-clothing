import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Heyyyy hats page</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/hatspage' component={HatsPage}/>
    </Switch>
  );
}

export default App;
