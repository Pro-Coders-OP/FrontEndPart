import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';
import "../AboutUs_design.css";

import './music.css';

function Player(props) {
    const audioE1 = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioE1.current.play();
        } else {
            audioE1.current.pause();  
        }
    });

    const SkipSong = (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() =>{
                let temp = props.currentSongIndex;
                temp++;
            
            if(temp > props.songs.length - 1) {
                temp  = 0;
            }
            return temp;
        });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                } 
                return temp;
            });
        }
    }

    


    return (
        <div className="container-fluid ">
        <div className="row">
        <div className="col-6 ">
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioE1}></audio>
            <h2 className=" text-center" style={{ fontFamily: 'Gochi Hand, cursive', fontSize: "60px" ,color:"#00FFFF"}}>Now Playing</h2>
            <Details song = {props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
        </div>  
        </div>
        <div className="col-6">
                    <h1 className="text-center" style={{ fontFamily: 'Gochi Hand, cursive', marginTop: "140px" }} ><span style={{ color: "#E9967A", fontSize: "60px" }}>Next up:</span> <br /><span style={{ color: "#F0F8FF" }}><span style={{ color: "#00FFFF", fontSize: "50px" }}>song:</span><span style={{ fontSize: "35px",color:"#FFF8DC" }}>{props.songs[props.nextSongIndex].title}</span> <br /> <span style={{ color: "#00FFFF", marginTop: "35px",fontSize:"50px" }}>artist:</span> <span style={{ fontSize: "35px",color:"#FFF8DC" }}>{props.songs[props.nextSongIndex].artist}</span></span></h1>
        </div>
        {/* <div className="cent-s">
                <h1><p className="position-absolute top-0 start-100 translate-middle">Next up: <span >{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p></h1>
            </div> */}
        </div>
        </div>
            
        

    )
}

export default Player;
