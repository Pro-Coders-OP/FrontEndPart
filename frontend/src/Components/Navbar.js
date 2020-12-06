import React from 'react'
// import {href} from "react-router-dom"

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-light" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item active ">
                <a className="nav-link text-light mx-2" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light mx-2" href="#">How it Works!</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light mx-2" href="#">Explore</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light mx-2" href="#">About Us</a>
                </li>
            </ul>
            <a className="nav-item" href="#">SignOut <i className="mx-1 fas fa-sign-out-alt"></i></a>
        </div>
    </nav>
    )
}
export default Navbar;