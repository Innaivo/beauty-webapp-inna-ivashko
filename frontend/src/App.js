import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Pricelist from './pages/Pricelist';
import SingleService from './pages/SingleService';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  <> 
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/pricelist/" component={Pricelist}/>
    <Route exact path="/pricelist/:slug" component={SingleService}/>
    <Route exact path="/contact/" component={Contact}/>
    <Route component={Error}/>

  </Switch>
  <Footer />
  </>
  );
}

export default App;
