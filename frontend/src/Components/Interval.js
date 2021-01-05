import React, { Component } from 'react'

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
      }).then(response => response.json()).then(data => this.setState({emotion:data}))
    }

    onSubmitEmotion =() => {
        // console.log(this.props.name)
        // console.log(this.state.emotion)
            fetch('http://localhost:3002/Faceemo', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: this.props.fname,
                        // email:this.props.email,
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
          // this.props.loadUser(user);
          
          this.props.onRouteChange('home');
         }
        })
  }


    render() {
        return (
            <div>
               {/* <button type="submit" onClick={this.onSubmitImage}>Submit My Image</button>   */}
               <button type="submit" onClick={this.onSubmitEmotion}>Lets Go!</button>  
            </div>
        )
    }
}

export default Interval
