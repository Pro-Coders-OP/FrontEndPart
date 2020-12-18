import { Component } from "react";
import React from 'react'

export default class Facemo extends Component {
    constructor(props) {
		super(props);
		this.state = {
      emotion:'',
      
		}
	}

    onemoChange = (event) => {
		this.setState({emotion: event.target.value})
    }
    
    onSubmitEmotion =() => {
      // console.log(this.props.name)
      // console.log(this.state.emotion)
		  fetch('http://localhost:3001/Faceemo', {
			      method: 'post',
			      headers: {'Content-Type': 'application/json'},
			      body: JSON.stringify({
                name: this.props.name,
                email:this.props.email,
                gender:this.props.gender,
                age: this.props.age,
                pref_song: this.props.pref_song,
                emotion: this.state.emotion
            })
     
      })
      .then(response => response.json())
      .then(user => {
        if (user) {
        // console.log(user)
        // this.props.loadUser(user);
				this.props.onRouteChange('home');
       }
      })
}
    
    render() {
        
        if(this.props.isSignedIn) {
          return (
            
            <div className="container-fluid">
                <h2 className="text-center display-4 text-info pb-4">{ `HELLO ${this.props.name} ! `}</h2>
                         <div className="form-group " >
                           <label >How are You Feeling? </label><span class="required"className="text-danger"> *</span> 
                           <input   
                           type="text" 
                           className="form-control"
                           name="emotion" 
                           placeholder="emotion"
                           onChange={this.onemoChange}                               
                           />
                         </div>

                         <div className="text-center ">
                         <button 
                         type="submit" 
                         className="btn btn-primary  btn-block  mt-4 mb-2"
                         onClick={this.onSubmitEmotion}
                         >ConTinue...
                         </button>
                         </div>
            </div>
        )
        }
        
    }

    }



// function Facemo({ onRouteChange, isSignedIn, name, gender, age, pref_song }) {
//   const state = {
//     emotion:''	
//   }

// onEmoChange = (event) => {
// 		this.setState({emotion: event.target.value})
//   }

// onSubmitEmotion =() => {
//   fetch('http://localhost:3001/Faceemo', {
//     method: 'post',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//               name: name,
//               gender:gender,
//               age: age,
//               pref_song: pref_song,
//               emotion: state.emotion
//     })
//   })
//   .then(response => response.json())
//   .then(user => {
//     if (user.id) {
//           this.props.loadUser(user);
//           onRouteChange('home');
//     }
//   })
// }

// // if(isSignedIn) {
//   return (
//     <div>
//         <div className="container-fluid">
//                 <h2 className="text-center display-4 text-info pb-4"> {name} !</h2>
//                          <div className="form-group " >
//                            <label >How are You Feeling? </label><span class="required"className="text-danger"> *</span> 
//                            <input   
//                            type="text" 
//                            className="form-control"
//                            name="emotion" 
//                            placeholder="emotion"
//                            onChange:                                
//                            />
//                          </div>

//                          <div className="text-center ">
//                          <button 
//                          type="submit" 
//                          className="btn btn-primary  btn-block  mt-4 mb-2"
//                         //  onClick={this.onSubmitEmotion}
//                          >ConTinue...
//                          </button>
//                          </div>
//             </div>
//     </div>
//   )
// }

// }

// export default Facemo



