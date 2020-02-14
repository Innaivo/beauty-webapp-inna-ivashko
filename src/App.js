import React from 'react';
import {Route, Switch} from 'react-router-dom';
import compression from 'compression';
import helmet from 'helmet';

import './App.css';

import Home from './pages/Home';
import Pricelist from './pages/Pricelist';
import SingleService from './pages/SingleService';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// App.use(compression()); //Compress all routes
// App.use(helmet());

function App() {
  return (
  <> 
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/pricelist/" component={Pricelist}/>
    <Route exact path="/pricelist/:slug" component={SingleService}/>
    <Route component={Error}/>

  </Switch>
  <Footer />
  </>
  );
}

export default App;
