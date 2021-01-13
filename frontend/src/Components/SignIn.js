import React, { Component } from 'react'
import bg_1 from "../assets/bg_1.jpg"
import "./SignIn_Reg.css"
import { Link, Redirect, Route } from "react-router-dom";
// import HomePage from './HomePage'

export default class SignIn extends Component {
  constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
      signInPassword: '',
      errormsg: '',
      colorerrormsg: 'text-danger',	
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

  onSubmitSignIn =() => {
		fetch('http://localhost:3002/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password:this.state.signInPassword
			})
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
				this.props.onRouteChange('WebcamSignin');
      }else {
        this.setState({errormsg:user})
    }
    })
		// .then(response => response.json())
		// .then(user => {
		// 	if(user.id) {
		// 		this.props.loadUser(user);
		// 		// this.props.onRouteChange('home');
		// 	}
		// })				
	}
    render() {
        return (
            <div className="container-fluid ">
                <div className="row">
                      
                <div class="card bg-dark">
                   <img src={bg_1} class="card-img opacity_cls" alt="login_bg"/>
                      <div class="card-img-overlay">
                        <div className="col-sm-4 mx-auto pt-1  rounded my-4 mt-5 ">
                      <div class="shadow p-3 mb-5 bg-dark text-light rounded"> 
                       {/* <form> */}
                         <h2 className="text-center display-4 text-info pb-4">Sign In</h2>
                         <div className="form-group " >
                           <label >Email address</label><span class="required"className="text-danger"> *</span> 
                           <input   
                           type="email" 
                           className="form-control"
                           name="email-address" 
                           placeholder="Enter email"
                           onChange={this.onEmailChange}                               
                           />
                         </div>
                         <div className="form-group">
                           <label>Password</label>
                           <input 
                           type="password" 
                           className="form-control" 
                           placeholder="Enter password" 
                           name="password"
                           onChange={this.onPasswordChange} 
                           />
                         </div>
                         <div className="text-center ">
                         <button 
                         type="submit" 
                         className="btn btn-primary  btn-block  mt-4 mb-2"
                         onClick={this.onSubmitSignIn}
                         >
                         Login</button></div>
                         <p className="forgot-password text-right mt-1">
                           To Create an account <Link to="/register" onClick={() => this.props.onRouteChange('register')}>sign Up?</Link></p>
                         {/* </form> */}
                         </div>
                  </div>
                  <div className=" col-12 text-center  mx-0">
                          <h3 className={this.state.colorerrormsg} >{this.state.errormsg}</h3>
                        </div>
                         
                    </div>
                    
                 </div> 
                </div>

              </div>

        )
    }
}

