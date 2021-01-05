import React, { Component } from 'react'
import bg_1 from "../assets/bg_1.jpg"
import "./SignIn_Reg.css"
// import { Link } from "react-router-dom";

export default class Register extends Component {

  
	constructor(props) {
		super(props);
		this.state = {
      First_name:'',
      Last_name:'',
      Gender:'',
      Age:'',
			email: '',
			password: '',
			songpref: ''	
		}
	}

	onNameChange = (event) => {
		this.setState({First_name: event.target.value})
  }
  
  onlNameChange = (event) => {
		this.setState({Last_name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
  }
  
  onGenderChange = (event) => {
		this.setState({Gender: event.target.value})
  }

  onAgeChange = (event) => {
		this.setState({Age: event.target.value})
  }

  onmusictypeChange = (event) => {
		this.setState({songpref: event.target.value})
  }


	onSubmitSignIn =() => {
		fetch('http://localhost:3002/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password:this.state.password,
        fname:this.state.First_name,
        lname:this.state.Last_name,
        gender:this.state.Gender,
        age:this.state.Age,
        songpref:this.state.songpref

			})
		})
		.then(response => response.json())
		.then(user => {
      if (user.id) {
        this.props.loadUser(user);
        // this.props.loadUser(user);
				this.props.onRouteChange('Webcam');
      }
		})
    
    
	}
    render() {
        return (
             <div  className="container-fluid ">
               
                   <div className="row">
                   <div class="card bg-dark">
                   <img src={bg_1} class="card-img opacity_cls " alt="login_bg"/>
                      <div class="card-img-overlay">
                      <div className=" col-sm-4 mx-auto pt-1  rounded  bg-dark text-light">
                     
                         <h2 className="text-center display-4 text-info pb-4">Sign Up</h2>

                         <div className="form-group">
                            <label>First name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="First_name"
                            onChange={this.onNameChange}                               
                            />
                         </div>

                         <div className="form-group">
                           <label>Last name</label>
                           <input 
                           type="text" 
                           className="form-control" 
                           name="Last_name"
                           onChange={this.onlNameChange}
                            />
                         </div>
                         <div className="form-group">
                             <label className="mr-5">Gender</label>
                             <input 
                             type="text" 
                             className="form-control" 
                             name="Gender"
                             onChange={this.onGenderChange}
                              />
                         
                         </div>

                         <div className="form-group">
                            <label >Age</label>
                            <input 
                             type="text" 
                             className="form-control" 
                             name="Age"
                             onChange={this.onAgeChange}
                              />
                           
                           
                          </div>

                         <div className="form-group " >
                           <label >Email address</label><span class="required"className="text-danger"> *</span>
                           <input   
                           type="email" 
                           className="form-control" 
                           name="email"
                           onChange={this.onEmailChange}
                             />
                         </div>

                         <div className="form-group">
                           <label>Password</label>
                           <input 
                           type="password" 
                           className="form-control" 
                           name="password"
                           onChange={this.onPasswordChange}
                            />
                         </div>

                         <div className="form-group">
                            <label >which type of songs do you mostly prefer to listen ?</label>
                            <input 
                           type="text" 
                           className="form-control" 
                           name="songpref"
                           onChange={this.onmusictypeChange}
                            />
                         
                           
                          </div>

                         <div className="text-center ">
                         <button 
                         type="submit" 
                         className="btn btn-primary  btn-block  mt-4 "
                         value="register"
                         onClick={this.onSubmitSignIn}
                         >
                         Sign Up
                         </button>
                         {/* </Link> */}
                         </div>

                         <p className="forgot-password text-info text-right mt-2 mb-2">
                           Already registered <div onClick={() => this.props.onRouteChange('signin')}>sign in?</div>
                         </p>
                      {/* </form> */}
                    </div>
                </div>
            </div>
            </div>
            </div>


        )
    }
}
