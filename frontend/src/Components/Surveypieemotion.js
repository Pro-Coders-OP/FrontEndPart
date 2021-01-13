import React from 'react'
import "./AboutUs_design.css"
import img1 from '../assets/emo_of_youth.png'
import img2 from '../assets/emo_of_youngadult.png'
import img3 from '../assets/emo_of_adult.png'
import img4 from '../assets/emo_of_senior.png'


export default function Surveypieemotion({ onRouteChange, isSignedIn }) {
    return (
        <div  className = " bgforsurvey" style ={{height:"auto",width:"100%"}} >

        <div className="container-fluid  border-top">
                <div className="row">
                <div className="col-1">
                        <button className="btn btn-lg" type="button" onClick={() => onRouteChange('Explore')} style={{ width: "50px", fontSize: "30px" }}><i class="fas fa-arrow-circle-left"></i></button>
                        </div>

                <div className="col-11 text-center"><h2 className=" mt-3 text-light" style={{ fontFamily:"Potta One, cursive"}}>Variation of emotions among different age groups</h2></div>
            <div className="col-md-6 col-sm-12 text-center" > <div class="shadow p-3 mb-5  rounded " style={{height:"500px",width:"550px",marginTop:"50px",marginLeft:"30px"}}><img src={img1} style={{width:"500px"}} alt="image1" /></div> </div>
            <div className="col-md-6 col-sm-12 text-center" ><div class="shadow p-3 mb-5  rounded " style={{height:"500px",width:"550px",marginTop:"50px",marginLeft:"60px"}}><img src={img2} style={{width:"500px"}} alt="image1" /></div></div>
            <div className="col-md-6 col-sm-12 text-center" ><div class="shadow p-3 mb-5  rounded " style={{height:"500px",width:"550px",marginTop:"50px",marginLeft:"30px"}}><img src={img3} style={{width:"500px"}} alt="image1" /></div></div>
            <div className="col-md-6 col-sm-12 text-center" ><div class="shadow p-3 mb-5  rounded " style={{height:"500px",width:"550px",marginTop:"50px",marginLeft:"60px"}}><img src={img4} style={{width:"500px"}} alt="image1" /></div></div>
                </div>
            </div>
            </div>
          
    
    )
}
