import React from 'react'
import { Link } from "react-router-dom";


function Navbar({ onRouteChange, isSignedIn , fname }) {
    if(isSignedIn) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-light" href="#">Welcome {fname} !</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active ">
                        <Link className="nav-link text-light mx-2" to="/homepage"  onClick={() => onRouteChange('home')}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light mx-2" to="/howitworks" onClick={() => onRouteChange('HowItWorks')}>How it Works!</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light mx-2" to="/Explore" onClick={() => onRouteChange('Explore')}>Explore</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light mx-2" to="/About" onClick={() => onRouteChange('AboutUs')}>About Us</Link>
                        </li>
                    </ul>
                    <div className="nav-item text-light mx-2" onClick={() => onRouteChange('signout')}><Link>SignOut <i className="mx-1 fas fa-sign-out-alt"></i></Link></div>
                </div>
            </nav>
            )    
    }
    
}
export default Navbar;