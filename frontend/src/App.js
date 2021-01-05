import React, { Component } from 'react'
import './App.css';
import Footer from './Components/Footer';
import Facemo from './Components/Facemo'
// import Player from './Components/Musicplayer/Player';
// import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Musicpage from './Components/Musicpage';
import ScrollToTop from './Components/ScrollToTop';
import Interval from './Components/Interval';
import WebcamCapture from './Components/WebcamCapture';


const initialState = {
   route: 'signin',
   isSignedIn: false,
   user: {
     id:'',
     name: '',
     fname:'',
     gender:'',
     age:'',
     songpref:'',
     email: '',
     emotion:'',
     joined: '',

   }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;      
  }
  // componentDidMount() {
  //    fetch('http://localhost:3001/')
  //    .then(response => response.json())
  //    .then(console.log) 
  // }
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      fname:data.fname,
      email:data.email,
      // joined:data.joined,
      gender:data.gender,
      age:data.age,
      songpref:data.songpref,
      emotion:data.emotion
    }})
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }else if (route === 'musicplayer') {
      this.setState({isSignedIn: true})
    }
    else if (route === 'faceemo') {
      this.setState({isSignedIn: true})
    } else if (route === 'Welcome') {
      this.setState({isSignedIn: true})
    }else if (route === 'Interval') {
      this.setState({isSignedIn: true})
    }else if (route === 'Webcam') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, route,user } = this.state;
    // const myComponent = <HomePage />
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Switch>
      
       {
        route === 'home' ? 
        <div> 
      
       <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
        <Title isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Footer /> 
       </div>
        
       
      : route ==='signin'?
     
      <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      :
      route === 'faceemo'?
      <Facemo  loadUser={this.loadUser} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} name={this.state.user.name} email={this.state.user.email} gender={this.state.user.gender} age={this.state.user.age} songpref={this.state.user.songpref}/>
      :
      route === 'musicplayer'?
      <div>
        <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} name={this.state.user.name}/>
        <Musicpage song="songs"/>
        <Footer />
      </div>
      :
      route === 'Interval' ?
      <Interval loadUser={this.loadUser} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname} email={this.state.user.email} gender={this.state.user.gender} age={this.state.user.age} songpref={this.state.user.songpref}/>
      :
      route === 'Webcam' ?
      <WebcamCapture isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      :
      <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      } 
            
      </Switch>
      
            
    </BrowserRouter>    
  );
  }
}

export default App;
