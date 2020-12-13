import React, { Component } from 'react'
import bg_1 from "../assets/bg_1.jpg"
import "./SignIn_Reg.css"
import { Link } from "react-router-dom";

export default class SignIn extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="row">
                      
                <div class="card bg-dark">
                   <img src={bg_1} class="card-img opacity_cls" alt="login_bg"/>
                      <div class="card-img-overlay">
                        <div className="col-sm-4 mx-auto pt-1  rounded my-4 mt-5 ">
                      <div class="shadow p-3 mb-5 bg-dark text-light rounded"> <form>
                         <h2 className="text-center display-4 text-info pb-4">Sign In</h2>
                         <div className="form-group " >
                           <label >Email address</label><span class="required"className="text-danger"> *</span> 
                           
                           <input   type="email" className="form-control" placeholder="Enter email"  />
                         </div>
                         <div className="form-group">
                           <label>Password</label>
                           <input type="password" className="form-control" placeholder="Enter password" />
                         </div>
                         <div className="text-center "><Link to="/homepage"><button type="submit" className="btn btn-primary  btn-block  mt-4 mb-2">Login</button></Link></div>
                         <p className="forgot-password text-right mt-1">
                           To Create an account <Link to="/register">sign Up?</Link></p>
                         </form>
                         </div>
                         </div>
                    </div>
                 </div> 
                </div>

              </div>

        )
    }
}

