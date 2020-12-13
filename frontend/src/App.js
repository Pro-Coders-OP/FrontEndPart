import React from 'react'
import './App.css';
import Footer from './Components/Footer';
// import Player from './Components/Musicplayer/Player';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
// import Title from './Components/Title';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Musicpage from './Components/Musicpage';
import { Provider } from "./Context";


function App() {
  return (

    <BrowserRouter>
      <Navbar />

      <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/musicplayer">
        <Musicpage song="songs"/>
        
      </Route>        
      </Switch>
      
      <Footer />       
    </BrowserRouter>
    
  )
  
 
}

export default App;
