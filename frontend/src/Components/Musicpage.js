import React, { Component } from 'react'
// import Particles from 'react-particles-js'; 
import mixer from "../assets/mixer.jpg";
import Musicmain from './Musicplayer/Musicmain';
import './Musicplayer/music.css'



class Musicpage extends Component {
  constructor(props) {
    super(props)
   
  }
  // prop = happy
  
    render() {
      const {emotion} = this.props
      console.log(emotion)

      const song = [
       //0
        [
        {
          title: "Taarif Karoon",
          artist: "Sanam, Mohammed Rafi",
          img_src: "https://covers.mr-jatt.im/thumb/480346/Taarif-Karoon.jpg",
          src: "http://pagalworldcom.com/siteuploads/files/sfd50/24591/Taarif%20Karoon%20-%20Sanam%20320%20Kbps(PagalWorldCom.Com).mp3"
        },
        {
          title: "Gallan Goodiyaan",
          artist: "Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar, Shankar Mahadevan, Sukhwinder Singh",
          img_src: "https://i1.sndcdn.com/artworks-000121692155-9lt800-t500x500.jpg",
          src: "https://pagalworldsongs.me/dl/download.php?id=44935&kbps=128kbps"
        },
        {
          title: "Ek Ladki Ko Dekha Toh Aisa Laga",
          artist: "Darshan Raval",
          img_src: "https://mp3.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/15285.png",
          src: "http://mp3.vlcmusic.com/mp3/org/15285.mp3"
        },
        {
          title: "Makhna",
          artist: "Tanishk Bagchi, Yasser Desai, Asees Kaur",
          img_src: "https://images.hungama.com/c/1/152/0c3/49521670/49521670_300x300.jpg",
          src: "https://pagalsong.in/uploads/systemuploads/mp3/Drive/Makhna%20-%20Drive%20128%20Kbps.mp3"
        }
      ],

      //1

       [
        
        {
          title: "Love You Zindagi",
          artist: "Amit Trivedi, Jasleen Kaur Royal",
          img_src: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1932045784.jpg",
          src: "https://pagalsong.in/uploads/systemuploads/mp3/Dear%20Zindagi/Love%20You%20Zindagi%20(Dear%20Zindagi)%20128%20Kbps.mp3"
        },
        {
          title: "Banjarey",
          artist: "Yo Yo Honey Singh",
          img_src: "https://api.pendu-jatt.com/thumbmed/1156775.jpg",
          src: "https://jatt.download/music/data/Hindi_Movies/201405/Fugly/128/Banjarey.mp3"
        },
        {
          title: "Yahin Hoon Main",
          artist: "Ayushmann Khurrana",
          img_src: "https://c.saavncdn.com/841/Yahin-Hoon-Main-Hindi-2015-500x500.jpg",
          src: "https://jatt.download/music/data/Hindi_Single/201512/Yahin_Hoon_Main/128/Yahin_Hoon_Main_1.mp3"
        },
        {
          title: "Dil Deewana",
          artist: "S P Balasubrahmanyam",
          img_src: "https://a10.gaanacdn.com/images/albums/54/23654/crop_175x175_23654.jpg",
          src: "https://medium.loadbig.info/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhbGJ1bV9pZCI6ODUwNywidGltZW91dCI6MTYxMDA4OTY3MX0.VVWxv8_zulReN8l5OVjf_hFAkaEeDIVwGLkLM3ZvGeU/wjoih/Dil%20Deewana%20-%20%28amlijatt.in%29.mp3"
        },
        {
          title: "Yaad Piya Ki Aane Lagi",
          artist: "Neha Kakkar",
          img_src: "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1573908970/50222864.jpg",
          src: "http://filmimp3.com/siteuploads/files/sfd41/20211/Yaad%20Piya%20Ki%20Aane%20Lagi%20-%20Neha%20Kakkar%2064%20Kbps(FilmiMp3.Com).mp3"
        }
       ],

       //2
       [
        
        {
          title: "Kar Har Maidaan Fateh",
          artist: "Sukhwinder Singh, Shreya Ghoshal, Vikram Montrose",
          img_src: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_361204245.jpg",
          src: "https://pagalsong.in/uploads/systemuploads/mp3/Sanju/Kar%20Har%20Maidaan%20Fateh%20(Sanju)%20128%20Kbps.mp3"
        },
        {
          title: "Jab Koi Baat",
          artist: "Atif Aslam, Shirley Setia",
          img_src: "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1518073887/srch_venus_IN-V11-18-00198.jpg",
          src: "https://jatt.download/music/data/Hindi_Single/201802/Jab_Koi_Baat_DJ_Chetas/128/Jab_Koi_Baat_DJ_Chetas_1.mp3"
        },
        {
          title: "Darr Ke Aage Jeet Hai",
          artist: "Sukhwinder Singh",
          img_src: "https://pagalworld.bar/thumbs2/26997-darr-ke-aage-jeet-hai.jpg",
          src: "https://mail.wapking.asia/files/download/type/128/id/28373"
        },
        {
          title: "Shree Hanuman Chalisa",
          artist: "Hariharan",
          img_src: "https://a10.gaanacdn.com/images/albums/5/4705/crop_175x175_1533299256_4705.jpg",
          src: "https://jatt.download/music/data/Bhakti_Sangeet/201408/Shree_Hanuman_Chalisa/128/Shree_Hanuman_Chalisa.mp3"
        }
       ],

       //3
       [
        
        {
          title: "Apna Time Aayega",
          artist: "Ranveer Singh",
          img_src: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_2032286589.jpg",
          src: "https://pagalsong.in/uploads/systemuploads/mp3/Gully%20Boy/Apna%20Time%20Aayega%20-%20Gully%20Boy%20128%20Kbps.mp3"
        },
        {
          title: "Jay-Jaykara",
          artist: "Kailash Kher",
          img_src: "https://cover.loadbig.info/thumb/ivstt/cover.jpg",
          src: "https://pagalsong.in/uploads/systemuploads/mp3/Baahubali%202%20-%20The%20Conclusion/Jay-Jaykara%20(Baahubali%202%20-%20The%20Conclusion)%20(Baahubali%202%20-%20The%20Conclusion)%20128%20Kbps.mp3"
        },
        {
          title: "Mirchi Lagi Toh",
          artist: "Kumar Sanu, Alka Yagnik",
          img_src: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1967309418.jpg",
          src: "https://pagalsong.in/uploads/systemuploads/mp3/Coolie%20No.%201%20(2020)/Mirchi%20Lagi%20Toh%20-%20Coolie%20No.%201%20(2020)%20128%20Kbps.mp3"
        },
        {
          title: "Besabriyaan",
          artist: "Armaan Malik",
          img_src: "https://a10.gaanacdn.com/images/albums/5/1743705/crop_175x175_1743705.jpg",
          src: "https://m.bestwap2.in/load/MP3_Songs/2016%20Bollywood/M_S_Dhoni_-_The_Untold_Story/320_Kbps_High_Quality/Besabriyaan_320_Kbps.mp3"
        }
       ]

      ];

      
      
      
      if(emotion == "Happy") {
        
      return (
        
          <div class="card bg-dark text-white">
          {/* <div className="img_back"> */}
            <img class="card-img img-fluid " style={{opacity: 0.4}} src={mixer} alt="Card image"/>
                  <div class="card-img-overlay" >
                  
                        <Musicmain song={song[0]}/>            
                    {/* <h5 class="card-title">{this.props.emotion}</h5> */}
                    {/*<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p> */}
                {/* </div> */}
          </div>
              
          </div>
              )
        }
          else if(emotion == "Anger") {
              return (
                <div class="card bg-dark text-white">
                {/* <div className="img_back"> */}
                  <img class="card-img img-fluid " style={{opacity: 0.4}} src={mixer} alt="Card image"/>
                        <div class="card-img-overlay" >
                        
                              <Musicmain song={song[1]}/>            
                           {/* <h5 class="card-title">{this.props.emotion}</h5> */}
                          {/*<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text">Last updated 3 mins ago</p> */}
                      {/* </div> */}
                </div>
                    
                </div>
                    )
            }
            else if(emotion == "Fear") {
              return (
                <div class="card bg-dark text-white">
                {/* <div className="img_back"> */}
                  <img class="card-img img-fluid " style={{opacity: 0.4}} src={mixer} alt="Card image"/>
                        <div class="card-img-overlay" >
                        
                              <Musicmain song={song[2]}/>            
                           {/* <h5 class="card-title">{this.props.emotion}</h5> */}
                          {/*<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text">Last updated 3 mins ago</p> */}
                      {/* </div> */}
                </div>
                    
                </div>
                    )
            }
            else if(emotion == "Sad") {
              return (
                <div class="card bg-dark text-white">
                {/* <div className="img_back"> */}
                  <img class="card-img img-fluid " style={{opacity: 0.4}} src={mixer} alt="Card image"/>
                        <div class="card-img-overlay" >
                        {/* {emo} */}
                              <Musicmain song={song[3]}/>            
                           {/* <h5 class="card-title">{this.props.emotion}</h5> */}
                          {/*<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text">Last updated 3 mins ago</p> */}
                      {/* </div> */}
                </div>
                    
                </div>
                    )
            }
    }
}

export default Musicpage

{/* <div className="App bg-info bg-gradient"> */}
        {/* <Particles className='particles'
          params={particlesOptions}
        /> */}
        
    {/* </div> */}