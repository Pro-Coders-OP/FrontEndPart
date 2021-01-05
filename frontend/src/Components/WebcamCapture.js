import React from 'react'
import Webcam from "react-webcam";
    

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
          <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          imageSmoothing="true"
        />
        <button onClick={capture}>Capture photo</button>
        <button onClick={() => onRouteChange('Interval')}><a href={imgSrc} download>Submit</a></button>
        {/* <button onClick={onSubmitImage}>Submit Image</button> */}
        
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </>
      )
    }
}

export default WebcamCapture
