import './styles/style.css';
import './styles/bootstrap.min.css';
import Home from './pages/Home.js';
import Regions from './pages/Regions.js'
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0);
  return (

    <div>
      <Router>
      <Navbar/>
      <Header/> 
   
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/Regions" component={Regions}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
    
    );
}

export default App;

