import React from 'react'
import './App.css';
import Footer from './Components/Footer';
// import Player from './Components/Musicplayer/Player';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
// import Title from './Components/Title';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Musicpage from './Components/Musicpage';
import ScrollToTop from './Components/ScrollToTop';
// import { Provider } from "./Context";


function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Switch>
      <Route exact path="/">
        <SignIn />
       </Route>
       <Route exact path="/homepage">
       <Navbar />
        <HomePage />
        <Footer /> 
       </Route>
       <Route exact path="/register">
        <Register />
       </Route>
       
      
      <Route exact path="/musicplayer">
        <Navbar />
        <Musicpage song="songs"/>
        <Footer /> 
        
      </Route>        
      </Switch>
      
            
    </BrowserRouter>    
  )
   
}

export default App;
