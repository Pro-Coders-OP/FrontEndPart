import React, { Component } from 'react'
import "./AboutUs_design.css"
import image1 from "../assets/emo_of_youth.png"
import image2 from "../assets/emo_of_youngadult.png"
import image3 from "../assets/emo_of_adult.png"
import image4 from "../assets/emo_of_senior.png"
import bg_png from "../assets/graph_png.png"

export class Explore extends Component {
constructor(props) {
  super(props)
}

render() {
  return (
   
    <div className="container-fluid bg-dark bg-gradient border-top">
      
        
      
            <div class=" col -6 text-center text-light">
        <h1 className="display-4 text-light mb-4" style={{ fontFamily: 'Permanent Marker, cursive' }}>DATA <span><img src={bg_png} style={{height:"50px",width:"50px"}}/></span> VISUALIZATION</h1>
            </div>
            <div className=" row justify-content-center text-center">
            <div id="carouselExampleControls" class=" col-12 carousel slide  " data-ride ="carousel" data-interval="4000">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <img class="d-block  w-90 justify-content-center img-fluid  mx-auto " style  = {{height:"350px ",width:"430px "}} src={image1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block  w-90 justify-content-center img-fluid  mx-auto " style  = {{height:"350px ",width:"430px "}} src={image2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block  w-90 justify-content-center img-fluid  mx-auto " style  = {{height:"350px ",width:"430px "}} src={image3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block  w-90 justify-content-center img-fluid  mx-auto " style  = {{height:"350px ",width:"430px "}} src={image4} alt="Fourth slide"/>
    </div>
    
  </div>
 
</div> 
             </div> 
           <div class="row text-center justify-content-end  ">
        <div class="col-md-6 mb-3 col-sm-12">
            <button type="button" class="btn btn-outline-light btn-lg mr-4 " style={{height:"100px",width:"350px"}}  onClick={() => this.props.onRouteChange('Surveybaremo')}>Variations of emotions among users</button>
        </div>
         <div class="col-md-6 mb-3 col-sm-12">
         <button type="button" class="btn btn-outline-light btn-lg mr-4" style={{height:"100px",width:"350px"}} onClick={() => this.props.onRouteChange('Surveypiesongall')}>Variations of song preference among users</button>
         </div>
        <div class="col-md-6 mb-4 col-sm-12">
            <button type="button" class="btn btn-outline-light btn-lg mr-4" style={{height:"100px",width:"350px"}} onClick={() => this.props.onRouteChange('Surveypieemotion')}>Variations of Emotions among different age groups</button></div>
        
        <div class="col-md-6 mb-4 col-sm-12">      
          <button type="button" class="btn btn-outline-light btn-lg mr-4" style={{height:"100px",width:"350px"}} onClick={() => this.props.onRouteChange('Surveypiesong')}>Variations of song preference among different age groups</button>
        </div>
          <h5 className="text-light"> * This page will be refreshed every week</h5>
      </div>
      </div>
      
        
               
           
    )

}
}

export default Explore


