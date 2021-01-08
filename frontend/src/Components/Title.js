import React from 'react'
import sairaman from "../assets/sairaman.jpg"
import { Link } from "react-router-dom";
import '../Title.css'
import './SignIn_Reg.css'


function Title({ onRouteChange, isSignedIn }) {
    // const { name } = props;
    var ReactRotatingText = require('react-rotating-text');
    
    if(isSignedIn){
    return (
        <div className="container-fluid ">
            <div className="row">
                {/* <div className="col-12"> */}
                    {/* <span><img className="img-fluid" src={sairaman} alt="image" /></span> */}
                {/* </div> */}
                <div class="card bg-dark text-white ">
                <img src={"https://i.pinimg.com/originals/0c/b2/ab/0cb2ab6226ff9987127a34145cf3478b.png"} class="card-img2" alt="Homepageimage"/>
                    <div class="card-img-overlay d-flex justify-content-left pt-5 mt-5">
                    <div className="py-5">
                    <h1 class="card-title mt-3 py-1 display-1 text-light font-weight-bolder " style={{fontFamily: 'East Sea Dokdo, cursive', fontSize:"285px",height:"255px"}}>HEY ! </h1>
                    <h3 className="mb-5 " style={{fontFamily: 'Permanent Marker, cursive',fontSize:"38px",color:"#FFC900"}}><ReactRotatingText items={['ARE YOU TIRED OF EVERDAY HUSTLE?', 'DO YOU WANNA RELAX?']} /></h3>
                    <h6><Link to="/musicplayer" onClick={() => onRouteChange('musicplayer')}><button type="button" class="btnforplay btn-primary btn-lg mr-4 "  >Play Music</button></Link></h6>
                    </div> 
                    
                    </div>
                </div>
                
            </div>
        </div>      
    )
    
}
}

export default Title;