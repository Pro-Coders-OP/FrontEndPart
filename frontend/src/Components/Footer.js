import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container-fluid text-center pb-5" style={{ backgroundColor: "black" }}>
                <div className="py-5">
                    <h1 className="text-light pb-3">A Group Project By 'TE-C SCOE' Students</h1>
                    <button className="btn btn-outline-light btn-sm">FeedBack</button>
                </div>
            

            <div className="row">
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">More Links</h5>
                    <Link className="text-light d-block zoom" to="/">Home</Link>
                    <a className="text-light d-block zoom" href="#">How it Works!</a>
                    <a className="text-light d-block zoom" href="#">Explore</a>
                    <a className="text-light d-block zoom" href="#">About Us</a>
                    <a className="text-light d-block zoom" href="#">Resources</a>
                    <a className="text-light d-block zoom" href="#">Write a Recommendation <i className="fas fa-heart"></i></a>
                </div>

                <div className="col-12 col-md-4 py-3 text-light text-justify-center">
                    <p class="font-weight-light text-lowercase pt-5">
                    <h4 style={{fontFamily: 'Caveat, cursive'}}> “YOU DON’T HAVE TO CONTROL YOUR THOUGHTS. YOU JUST HAVE TO STOP LETTING THEM CONTROL YOU.” <br/>_ DAN MILLMAN</h4>
                    </p>
                </div>

                <div className="col-12 col-md-4 py-1">
                    <h5 className="text-info pb-3">Social</h5>
                    <a href="#">
                        <i className="fab fa-linkedin text-light h1 d-block"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-instagram-square text-light h1 d-block"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-github-square text-light h1 d-block"></i>
                    </a>
                    <a href="#">
                        <i className="fas fa-envelope text-light h1 d-block"></i>
                    </a>
                </div>
            </div>

            {/* <div className="text-muted py-3">
                    <p>Copyright <i className="far fa-copyright"></i> Prasad Mali 2020</p>
                </div>  */}
                
        </div>
        </footer>
    )
}

export default Footer;