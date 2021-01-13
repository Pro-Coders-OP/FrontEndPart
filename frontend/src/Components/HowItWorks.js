import React from 'react'
import image1 from "../assets/aspire-yellow.png"
import "./AboutUs_design.css"

export default function Howitworks() {
    return (
        <div  className = " big-banner" style ={{height:"auto",width:"100%"}} >
            
        <div className="container text-center text-light py-5">
        <h1 className="font-weight-light display-3" style={{fontFamily: 'Big Shoulders Stencil Text, cursive'}}>
        How it<span className="text-warning"> Works</span>
        </h1>
        <div className="lead pb-3" style={{fontFamily: 'Dancing Script, cursive'}}> Hello pal, We welcome you at our experiment. This is our project based on Machine Learning algorithms to recommend playlists according to your current taste.</div>
        <div className="row">
            <div className="col-12 col-md-6 px-5 pt-5">
            <div class="shadow-lg p-3 mb-5  rounded " style={{height:"333px"}}>
                <h2 style={{fontFamily: 'Big Shoulders Stencil Text, cursive',fontFamily: 'Dancing Script, cursive',fontFamily: 'Patrick Hand, cursive'}}>
                How to use ?
                </h2><br/>
              <p className="text-justify">
              1.Sign up or Log in to the service.<br />
                2.Here comes the homepage. You can navigate through our project from here. <br />
                3. What else?
                We have a survey updating every second about a ton of information based on various age groups.<br />
                4.Appreciate our work?
                Please fill in the remarks and suggestions while you log out after enjoying some music.<br /> 
                </p>
              </div>
              </div>

            <div className="col-12 col-md-6 px-5 pt-5">
            <div class="shadow-lg p-3 mb-5  rounded ">

                <h2 style={{fontFamily: 'Big Shoulders Stencil Text, cursive',fontFamily: 'Dancing Script, cursive',fontFamily: 'Patrick Hand, cursive'}}>
                Why did we start?
                </h2>
              <p className="text-justify">
                  According to a report from Indiatoday.in, India leads the world in teenage depression.One in 4 teenagers in India suffers from depression.
                  We saw this and while we couldn't treat them clinically, we can help them in coping up from this.
                  Let's face it, we all are music lovers. 
                  We wanted to know the general mental state of people in various age groups. Also their taste in music. We wanted to create a service which services our users from various age groups.
                  So we came up with a combined solution and we did it. 
                  Our project recommends users an appropiate playlist based upon their current mood.
                </p>
                </div>
            </div>

        </div>

        <div className="row">
            <div className="col-12 col-md-12 px-5 pt-5">
            <div class="shadow-lg p-3 mb-5  rounded ">

              <h2 style={{fontFamily: 'Big Shoulders Stencil Text, cursive',fontFamily: 'Dancing Script, cursive',fontFamily: 'Patrick Hand, cursive'}}>
              How it works:

                </h2>
              <p className="text-justify">
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
                </div>
            </div>

            {/* <div className="col-12 col-md-6 px-5 pt-5">
                <h5>
                    How I can help you?
                </h5>
                <p className="text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, laborum facere? Fugiat facilis labore quod culpa consequuntur illo ullam est voluptas cum laborum. Deleniti, praesentium nisi quae numquam ex nostrum?
                </p>
            </div> */}
        </div>

    </div>
</div>
        
    )
}
