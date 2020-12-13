import React from 'react'
import sairaman from "../assets/sairaman.jpg"
import { Link } from "react-router-dom";
import '../Title.css'

function Title() {
    // const { name } = props;
    var ReactRotatingText = require('react-rotating-text');
    

    return (
        <div className="container-fluid ">
            <div className="row">
                {/* <div className="col-12"> */}
                    {/* <span><img className="img-fluid" src={sairaman} alt="image" /></span> */}
                {/* </div> */}
                <div class="card bg-dark text-white ">
                <img src={sairaman} class="card-img2" alt="Homepageimage"/>
                    <div class="card-img-overlay d-flex justify-content-left pt-5 mt-5">
                    <div className="py-5">
                    <h1 class="card-title mt-5 py-1 display-1 text-light font-weight-bolder " style={{fontFamily: 'Fredoka One, cursive'}}>HEY !<br/> </h1>
                    <h3 className="mb-5" style={{fontFamily: 'Permanent Marker, cursive'}}><ReactRotatingText items={['ARE YOU TIRED OF EVERDAY HUSTLE?', 'DO YOU WANNA RELAX?']} /></h3>
                    <h6><Link to="/musicplayer"><p class="card-text">LISTEN TO SOME MUSIC ---></p></Link></h6>
                    </div> 
                    
                    </div>
                </div>
                
            </div>
        </div>      
    )
}

export default Title;