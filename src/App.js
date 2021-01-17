import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component.jsx'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
