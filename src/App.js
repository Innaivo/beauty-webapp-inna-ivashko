import React from 'react';
import './App.css';

import Home from './pages/Home';
import Pricelist from './pages/Pricelist';
import SingleService from './pages/SingleService';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
  <> 
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/pricelist/" component={Pricelist}/>
    <Route exact path="/pricelist/:service" component={SingleService}/>
    <Route component={Error}/>

  </Switch>

  </>
  );
}

export default App;
