import React, { Component } from 'react'
import bg_1 from "../assets/bg_1.jpg"
import "./SignIn_Reg.css"
import { Link } from "react-router-dom";

export default class Register extends Component {
    render() {
        return (
             <div  className="container-fluid ">
               
                   <div className="row">
                   <div class="card bg-dark">
                   <img src={bg_1} class="card-img opacity_cls " alt="login_bg"/>
                      <div class="card-img-overlay">
                      <div className=" col-sm-4 mx-auto pt-1   rounded  bg-dark text-light">
                       <form>
                         <h2 className="text-center display-4 text-info pb-4">Sign Up</h2>

                         <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                         </div>

                         <div className="form-group">
                           <label>Last name</label>
                           <input type="text" className="form-control" placeholder="Last name" />
                         </div>
                         <div className="form-group">
                             <label className="mr-5">Gender</label>
                           
                            <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="Gender_input" id="male_id"/>
                           <label class="form-check-label" for="male_id"> Male</label>
                           </div>
                           <div class="form-check-inline ml-3">
                             <input class="form-check-input" type="radio" name="Gender_input" id="female_id" />
                             <label class="form-check-label" for="female_id">Female</label>
                           </div>
                         </div>
                         <div className="form-group">
                            <label >Age</label>
                            <br></br>
                            
                            <div class="form-check-inline">
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
                           </div>
                           
                          </div>

                         <div className="form-group " >
                           <label >Email address</label><span class="required"className="text-danger"> *</span>
                           <input   type="email" className="form-control" placeholder="Enter email"  />
                         </div>

                         <div className="form-group">
                           <label>Password</label>
                           <input type="password" className="form-control" placeholder="Enter password" />
                         </div>
                         <div className="form-group">
                           <label> Confirm Password</label>
                           <input type="password" className="form-control" placeholder="Enter password" />
                         </div>
                         <div className="form-group">
                            <label >which type of songs do you mostly prefer to listen ?</label>
                          <br></br>
                            
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
                           </div>
                           
                          </div>
                         <div className="text-center "><Link to="/homepage"><button type="submit" className="btn btn-primary  btn-block  mt-4 ">Sign Up</button></Link></div>
                         <p className="forgot-password text-right mt-2 mb-2">
                           Already registered <Link to="/">sign in?</Link>
                         </p>
                      </form>
                    </div>
                </div>
            </div>
            </div>
            </div>


        )
    }
}
