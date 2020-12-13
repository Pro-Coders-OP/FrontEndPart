import React from 'react'
import sairaman from "../assets/sairaman.jpg"
import { Link } from "react-router-dom";


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
                <img src={sairaman} class="card-img" alt="Homepageimage"/>
                    <div class="card-img-overlay d-flex justify-content-left pt-5 mt-5">
                    <div className="py-5">
                    <h1 class="card-title mt-5 py-1 display-1 text-light font-weight-bolder " style={{fontFamily: 'Fredoka One, cursive'}}>HEY !<br/> </h1>
                    <h3 className="pb-2" style={{fontFamily: 'Permanent Marker, cursive'}}><ReactRotatingText items={['ARE YOU TIRED OF EVERDAY HUSTLE?', 'DO YOU WANNA RELAX?']} /></h3>
                    <Link to="/musicplayer"><p class="card-text">Listen to Some Music!</p></Link>
                    </div> 
                    
                    </div>
                </div>
                
            </div>
        </div>      
    )
}

export default Title;