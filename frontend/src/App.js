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
import Writesuggestion from './Components/Writesuggestion';
import InterSignin from './Components/InterSignin';
import WebcamSignin from './Components/WebcamSignin';
import Surveybaremo from './Components/Surveybaremo';
import Explore from './Components/Explore';
import Surveypieemotion from './Components/Surveypieemotion';
import Surveypiesong from './Components/Surveypiesong';
import Surveypiesongall from './Components/Surveypiesongall'
import AboutUs from './Components/AboutUs';
import Howitworks from './Components/HowItWorks';

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
    }else if (route === 'Suggestion') {
      this.setState({isSignedIn: true})
    }else if (route === 'InterSignin') {
      this.setState({isSignedIn: true})
    }else if (route === 'WebcamSignin') {
      this.setState({isSignedIn: true})
    }else if (route === 'Explore') {
      this.setState({isSignedIn: true})
    }else if (route === 'Surveybaremo') {
      this.setState({isSignedIn: true})
    }else if (route === 'Surveypieemotion') {
      this.setState({isSignedIn: true})
    }else if (route === 'Surveypiesong') {
      this.setState({isSignedIn: true})
    }else if (route === 'Surveypiesongall') {
      this.setState({isSignedIn: true})
    }else if (route === 'AboutUs') {
      this.setState({isSignedIn: true})
    }else if (route === 'HowItWorks') {
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
        <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/> 
       </div>
        
       
      : route ==='signin'?
        
      <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      :
      route === 'faceemo'?
      <Facemo  loadUser={this.loadUser} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} name={this.state.user.name} email={this.state.user.email} gender={this.state.user.gender} age={this.state.user.age} songpref={this.state.user.songpref}/>
      :
      route === 'musicplayer'?
      <div>
        <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
        <Musicpage isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} emotion={this.state.user.emotion}/>
        <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      :
      route === 'Interval' ?
      <Interval loadUser={this.loadUser} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname} email={this.state.user.email} gender={this.state.user.gender} age={this.state.user.age} songpref={this.state.user.songpref}/>
      :
      route === 'Webcam' ?
      <WebcamCapture isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      :
      route === 'Suggestion' ?
      <div>
      <ScrollToTop />
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <Writesuggestion isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>

      :
      route === 'InterSignin' ?
      <InterSignin loadUser={this.loadUser} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname} email={this.state.user.email}/>
      :
      route === 'WebcamSignin' ?
      <WebcamSignin isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      :
      route === 'Explore' ?
      <div>
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <Explore isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      :
      route === 'Surveybaremo' ?
      <div>
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <Surveybaremo isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      
      :
      route === 'Surveypieemotion' ?
      <div>
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <Surveypieemotion isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      
      :
      route === 'Surveypiesong' ?
      <div>
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <Surveypiesong isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      :
      route === 'Surveypiesongall' ?
      <div>
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <Surveypiesongall isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      :
      route === 'AboutUs' ?
      <div>
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <AboutUs isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      :
      route === 'HowItWorks' ?
      <div>
      <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} fname={this.state.user.fname}/>
      <Howitworks />
      <Footer isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      </div>
      :
      <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
      } 
            
      </Switch>
      
            
    </BrowserRouter>    
  );
  }
}

export default App;
