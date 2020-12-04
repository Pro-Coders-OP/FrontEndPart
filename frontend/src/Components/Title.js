import React from 'react'
import sairaman from "../assets/sairaman.jpg"

var ReactRotatingText = require('react-rotating-text');


function Title() {
    // const { name } = props;
    return (
        <div>
        
       
         {/* <div className="container-fluid py-5"> */}
             {/* <div className="col-12 mt-0"> */}
                <img 
                className="img-fill w-100 "
                src= {sairaman}
                alt="Heyy"
                />
             {/* </div> */}

         {/* </div> */}

        <h1>
            <ReactRotatingText items={['HEY HOW ARE YOU', 'second', 'third']} />
        </h1>  
        </div>      
    )
}

export default Title;