import React, { Component } from 'react'
// import Particles from 'react-particles-js'; 
import mixer from "../assets/mixer.jpg";
import Musicmain from './Musicplayer/Musicmain';
import './Musicplayer/music.css'

const particlesOptions = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 400,
          
          }
        }
      }
     
  }

class Musicpage extends Component {

  // prop = happy

    render() {
      const song = [
        [
        {
          title: "The Horizon of Saudade - Dil Bechara",
          artist: "A.R.Rahman",
          img_src: "https://images.genius.com/f798d2dd0bbec0c05bfb0ef94c7b2534.1000x1000x1.jpg",
          src: "https://pagalsong.in/uploads/systemuploads/mp3/Dil%20Bechara/The%20Horizon%20of%20Saudade%20-%20Dil%20Bechara%20128%20Kbps.mp3"
        },
        {
          title: "Song 2",
          artist: "Artist 2",
          img_src: "https://i1.sndcdn.com/artworks-000551838054-af70cv-t500x500.jpg",
          src: "https://docs.google.com/uc?export=download&id=1XqjTZopAZrxFoYwUxldu_gNa6b4Uwcjz"
        },
        {
          title: "Song 3",
          artist: "Artist 3",
          img_src: "./images/song-3.jpg",
          src: "./music/on-n-on.mp3"
        },
        {
          title: "Song 4",
          artist: "Artist 4",
          img_src: "./images/song-4.jpg",
          src: "./music/somebody-new.mp3"
        }
      ],

       [
        
        {
          title: "Song 2",
          artist: "Artist 2",
          img_src: "https://i1.sndcdn.com/artworks-000551838054-af70cv-t500x500.jpg",
          src: "https://docs.google.com/uc?export=download&id=1XqjTZopAZrxFoYwUxldu_gNa6b4Uwcjz"
        },
        {
          title: "Song 2",
          artist: "Artist 2",
          img_src: "https://i1.sndcdn.com/artworks-000551838054-af70cv-t500x500.jpg",
          src: "https://docs.google.com/uc?export=download&id=1XqjTZopAZrxFoYwUxldu_gNa6b4Uwcjz"
        },
        {
          title: "Song 3",
          artist: "Artist 3",
          img_src: "./images/song-3.jpg",
          src: "./music/on-n-on.mp3"
        },
        {
          title: "Song 4",
          artist: "Artist 4",
          img_src: "./images/song-4.jpg",
          src: "./music/somebody-new.mp3"
        }
       ]
      ];

        return (
    <div class="card bg-dark text-white">
    {/* <div className="img_back"> */}
      <img class="card-img img-fluid " style={{opacity: 0.4}} src={mixer} alt="Card image"/>
            <div class="card-img-overlay" >
              
              <Musicmain song={song[0]}/>
              {/* <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">Last updated 3 mins ago</p> */}
          {/* </div> */}
    </div>
        
    </div>

    
        )
    }
}

export default Musicpage

{/* <div className="App bg-info bg-gradient"> */}
        {/* <Particles className='particles'
          params={particlesOptions}
        /> */}
        
    {/* </div> */}