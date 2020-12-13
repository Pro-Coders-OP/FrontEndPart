import { useState, useEffect} from 'react';
import Player from './Player';
import './music.css';
// import KiaseHua from "../KaiseHua.mp3"; 

function Musicmain(props) {
     let { song } = props;
     console.log(song)
      

  

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
        

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > song.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  
    
  return(
    <div className="conatiner-fluid">
      <div className="Musicmain">
        {/* <div class="position-relative"> */}
        {/* <div > */}
          <Player class="cent-m"
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex} 
                nextSongIndex={nextSongIndex} 
                songs={song}
          />
        </div>
          
        </div>
          
      // </div>
  );
}

export default Musicmain;
