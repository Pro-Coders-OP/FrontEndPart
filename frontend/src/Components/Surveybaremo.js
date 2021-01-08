import React from 'react'
import "./AboutUs_design.css"
import img1 from '../assets/emo_of_ppl.png'




export default function Surveybaremo() {
    return (
        <div  className = " bgforsurvey" style ={{height:"auto",width:"100%"}} >

        <div className="container-fluid  border-top">
            <div className="row">
            <div className="col-md-6 col-sm-12 text-center mx-auto" style={{marginTop:"20px"}} > <div class="shadow-lg p-3 mb-5  rounded" ><img  className="img-fluid" style={{width:"100%"}} src={img1}  alt="image1" /></div> </div>

             

                </div>
            </div>
            </div>
          
    
    )
}
