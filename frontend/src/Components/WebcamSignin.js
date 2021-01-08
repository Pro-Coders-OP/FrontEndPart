import React from 'react'
import Webcam from "react-webcam";
import bgimg from "../assets/bg_for_cam.jpg"
import "./SignIn_Reg.css"
    

function WebcamCapture({ onRouteChange, isSignedIn }) {

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const data = new FormData();
    data.append('file', imgSrc);

    // const onSubmitImage = () => {
    //     fetch('/upload', {
    //         method: 'post',
    //         body: data
    //         })
    //     .then(response => response.json()).then(data => console.log(data))  
        console.log({imgSrc})    //base64 image object
        // window.location.href = imgSrc;
    
  if(isSignedIn) {
    return (
      <div  className = "jumbotron bgforcam" style ={{height:"auto",width:"100%"}} >
        <div className="container-fluid  " >
         
          <div className="col-6  mx-auto  rounded border  border-5 pl-5 pr-0">
            
          <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          imageSmoothing="true"
        />
          </div>
          <div className="row " style={{ marginBottom: "100px" }}>
            <div class = " col-4"></div>
            <div className = " mx-auto mt-2 ">
               <button className="btn btn-primary btn-lg  " onClick={capture}>Capture photo</button>
        </div>
            <div className="mt-2 mx-auto ">
              <button className="btn btn-warning btn-lg" onClick={() => onRouteChange('InterSignin')}><a href={imgSrc} download>Submit</a></button>
             
            </div>
            <div class = " col-4"></div>
            </div>
        {/* <button onClick={onSubmitImage}>Submit Image</button> */}
        
        {/* {imgSrc && (
          <img
            src={imgSrc}
          />
        )} */}
        </div> 
        </div>
      )
    }
}

export default WebcamCapture
