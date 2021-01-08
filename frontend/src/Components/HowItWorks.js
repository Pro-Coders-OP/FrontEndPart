import React from 'react'
import image1 from "../assets/aspire-yellow.png"
import "./AboutUs_design.css"

export default function Howitworks() {
    return (
        <div  className = " big-banner" style ={{height:"auto",width:"100%"}} >
             <div className="container-fluid">
              <h1>Music recommendation using sentiment analysis!</h1>
              <p>
              </p>
                
              
              <p />
              <p style={{justifyContent: 'center', fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
                <h1 className="display-4 text-center" style={{fontFamily:"Bangers, cursive"}}>How it Works...!</h1>
                <br />
                <br />
                <br />
                Hello pal. We, the group"Pro-coders" welcome you at our experiment. This is our project based on Machine Learning algorithms to recommend playlists according to your current taste. <br />
              </p>
              <p>
              </p><h2>
                HOW TO USE :
              </h2>
              <p />
              <p style={{justifyContent: 'center', fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
                1.Sign up or Log in to the service.<br />
                2.Here comes the homepage. You can navigate through our project from here. <br />
                3. What else?
                We have a survey updating every second about a ton of information based on various age groups.<br />
                4.Appreciate our work?
                Please fill in the remarks and suggestions while you log out after enjoying some music.<br /> 
              </p>
              <p>
              </p><h2>
                Why did we start?
              </h2>
              <p />
              <p style={{justifyContent: 'center', fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
              According to a report from Indiatoday.in, India leads the world in teenage depression.One in 4 teenagers in India suffers from depression.
              We saw this and while we couldn't treat them clinically, we can help them in coping up from this.
              Let's face it, we all are music lovers. 
              We wanted to know the general mental state of people in various age groups. Also their taste in music. We wanted to create a service which services our users from various age groups.
              So we came up with a combined solution and we did it. 
              Our project recommends users an appropiate playlist based upon their current mood.
              </p>
              <p>
              </p><h2>
              How it works:
              </h2>
              <p />
              <p style={{justifyContent: 'center', fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic', }}>
              First, we collect Sign n Login data from user.
              This data gets entered in signup n login table simultaneously
              and gets saved on a created Node server 
              For security purposes, password hashing is done and thus are encrypted.
              When logged in, a page displays webcam. 
              The current expression of user's face is captured and recognised
              This works by capturing the image and passing the image to our ML algorithm powered by CNN(Convolutional neural network).
              This expression is passed to survey table along with the user's basic details.
               User is then redirected to homepage.
              User gets various options displayed to navigate.
              When the user opts to listen some music, we recommend him a music playlist based on his recently recognised mood.
              If a user opts to view our survey, our real-time updating survey gets displayed.
              The survey is all about the general mental state of people of various age groups
              Additionally, it also displays people's taste of music in various age groups.
              This information is presented using visually appealing elements.
              User may also see our "How it works" page which contains every bit of information needed to create a project liks ours'.
              At last, an "About Us" page is also present providing info about the brains behind this project.   
              </p>
              <p>
              </p ><h2>
                 
              </h2>
              <p />
              <p style={{justifyContent: 'center', fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
               
              </p>
            </div>
        </div>
    )
}
