import React, { Component } from 'react'
import Musicpage from './Musicpage'



export class Interval extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
            
            emotion:''
        }

      }

      
      // onSubmitImage = () => {
      //   fetch('http://127.0.0.1:5000/api' , {
      //   method: 'get',
      //   headers: {'Content-Type': 'application/json'}
      // }).then(response => response.json()).then(data => console.log(data))
      // }
// this.setState({emotion:data})
    componentDidMount() {
      
      fetch('http://127.0.0.1:5000/api' , {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
      }).then(response => response.json()).then(data => this.setState({emotion:data}))}

    onSubmitEmotion =() => {
        // console.log(this.props.name)
        // console.log(this.state.emotion)
            fetch('http://localhost:3002/Faceemo', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        fname: this.props.fname,
                        email:this.props.email,
                        gender:this.props.gender,
                        age: this.props.age,
                        songpref: this.props.songpref,
                        emotion: this.state.emotion
              })
       
        })
        .then(response => response.json())
        .then(user => {
          if (user) {
          console.log(user)
          this.props.loadUser(user);
          this.props.onRouteChange('home');
         }
        })
  }


  render() {
               setTimeout(this.onSubmitEmotion,20000)

        return (
          <div  className = "bgforinter" style ={{height:"auto",width:"100%"}} >

          <div className="container-fluid ">
          <div className="row">
              <div className="col-12 mx-0 px-0">
                  {/* <span><img className="img-fluid" src={sairaman} alt="image" /></span> */}
              {/* </div> */}
                          <div style={{ width: "700px", margin: "50px auto",marginBottom:"393px",marginTop:"335px" }}>
                <div class="progress" style={{height:"50px"}}>
                  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: "100%"}}>
                     <span class="title text-dark"><h3>Loading...</h3></span>
                   </div>
                 </div>
               </div>
              
                
                  
          {/* <button type="submit" style={{marginBottom:"693px"}} onClick={this.onSubmitEmotion}>Lets Go!</button> */}

                  {/* <h1 class="card-title mt-5 py-1 display-1 text-light font-weight-bolder " style={{fontFamily: 'Fredoka One, cursive'}}>HEY !<br/> </h1>
                  <h3 className="mb-5" style={{fontFamily: 'Permanent Marker, cursive'}}><ReactRotatingText items={['ARE YOU TIRED OF EVERDAY HUSTLE?', 'DO YOU WANNA RELAX?']} /></h3>
                  <h6><Link to="/musicplayer" onClick={() => onRouteChange('musicplayer')}><p class="card-text">LISTEN TO SOME MUSIC ---></p></Link></h6> */}
                  </div> 
                  
                  </div>
              </div>
              </div>

        )
    }
}

export default Interval
