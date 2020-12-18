import React, { Component } from 'react'
import bg_1 from "../assets/bg_1.jpg"
import "./SignIn_Reg.css"
import { Link } from "react-router-dom";

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
			type_music: ''	
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
		this.setState({type_music: event.target.value})
  }


	onSubmitSignIn =() => {
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password:this.state.password,
        name:this.state.First_name,
        lname:this.state.Last_name,
        gender:this.state.Gender,
        age:this.state.Age,
        songpref:this.state.type_music

			})
		})
		.then(response => response.json())
		.then(user => {
      if (user.id) {
        this.props.loadUser(user);
        // this.props.loadUser(user);
				this.props.onRouteChange('faceemo');
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
                       {/* <form> */}
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
                            {/* <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="Gender_input" id="male_id"/>
                           <label class="form-check-label" for="male_id"> Male</label>
                           </div>
                           <div class="form-check-inline ml-3">
                             <input class="form-check-input" type="radio" name="Gender_input" id="female_id" />
                             <label class="form-check-label" for="female_id">Female</label>
                           </div> */}
                         </div>

                         <div className="form-group">
                            <label >Age</label>
                            <input 
                             type="text" 
                             className="form-control" 
                             name="Age"
                             onChange={this.onAgeChange}
                              />
                            {/* <br></br> */}
                            
                            {/* <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="age_input" id="age_id"/>
                           <label class="form-check-label" for="age_id"> age 1</label>
                           </div>
                           <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="age_input" id="age_id"/>
                           <label class="form-check-label" for="age_id"> age 2</label>
                           </div>
                           <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="age_input" id="age_id"/>
                           <label class="form-check-label" for="age_id"> age 3</label>
                           </div>
                           <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="age_input" id="age_id"/>
                           <label class="form-check-label" for="age_id"> age 4</label>
                           </div> */}
                           
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

                         {/* <div className="form-group">
                           <label> Confirm Password</label>
                           <input 
                           type="password" 
                           className="form-control" 
                           name="Conf_password"
                            />
                         </div> */}

                         <div className="form-group">
                            <label >which type of songs do you mostly prefer to listen ?</label>
                            <input 
                           type="text" 
                           className="form-control" 
                           name="type_music"
                           onChange={this.onmusictypeChange}
                            />
                          {/* <br></br>
                            
                            <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="song_input" id="song_id"/>
                           <label class="form-check-label" for="song_id"> type 1</label>
                           </div>
                           <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="song_input" id="song_id"/>
                           <label class="form-check-label" for="song_id"> type 2</label>
                           </div>
                           <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="song_input" id="song_id"/>
                           <label class="form-check-label" for="song_id"> type 3</label>
                           </div>
                           <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="song_input" id="song_id"/>
                           <label class="form-check-label" for="song_id"> type 4</label>
                           </div> */}
                           
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
