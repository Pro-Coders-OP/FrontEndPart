import React, { Component } from 'react'
import "./Suggest.css"


 class Writesuggestion extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: "",
            email: "",
            profession: "",
            suggestion: "",
            submitMessage: "",
            submitMessageTextColor: "" 
        }
    }


    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        // e.target.reset();
        // let isSuccessful = true;
        const {name} = this.state

        fetch('http://localhost:3002/Suggestion', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
                email: this.state.email,
                profession: this.state.profession,
                suggestion: this.state.suggestion,
			})
            })
            .then(response => response.json())
            .then(user => {
            if (user) {
                // this.props.loadUser(user);
                this.setState({
                    submitMessage: `Thank you ${name} for the suggestion! We will definitely look into it.`,
                    submitMessageTextColor: "font-weight-bold text-light bg-dark"
                })
                
            }
            else {
                this.setState({
                    submitMessage: "Oops! Something went wrong. Please try again later :(",
                    submitMessageTextColor: "text-danger",
                })
            }
            })


                    

        // if(isSuccessful) {
        //     this.setState({
        //         submitMessage: `Thank you ${name} for the suggestion! We will definitely look into it.`,
        //         submitMessageTextColor: "font-weight-bold text-light bg-dark"
        //     })
        // }
        // else {
        //     this.setState({
        //         submitMessage: "Oops! Something went wrong. Please try again later :(",
        //         submitMessageTextColor: "text-danger",
        //     })
        // }


        // const newSuggestion = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     designation: this.state.designation,
        //     message: this.state.suggestion,
        // }

       
    } 

    handleReset = () => {
        this.setState({
            name: "",
            email: "",
            profession: "",
            suggestion: "",
            submitMessage: "",
            submitMessageTextColor: ""
        });
      };    

    // onRevertHome = () => {
    //     this.props.onRouteChange('home');
    // }
   
    render() {

                const {submitMessage, submitMessageTextColor} = this.state;
                
                    return (
                        <div class="imgop">
                        <div className="container-fluid" style={{ opacity: "1"}} >
                        <h1 className=" text-center py-3 display-4" style={{ fontFamily: "Dosis, sans-serif"}}>
                        <span className="text-dark ">Write a </span><span className="text-danger ">Suggestion!</span> 
                        </h1>
                        <div className="row justify-content-center">
                            <div className="col-11 col-lg-5  text-light ">
                            <form> 
                            {/* //badge bg-primary text-wrap */}
                                    <div className="form-group ">
                                        <label htmlFor="name" className="bg-dark">Name *</label>
                                        <input type="text" name="name" className="form-control " onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="bg-dark">Email *</label>
                                        <input type="email" name="email" className="form-control" onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="profession" className="bg-dark">Profession *</label>
                                        <input type="text" name="profession" className="form-control" onChange={this.onChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="suggestion" className="bg-dark">Suggestion (Max : 100 letters) *</label>
                                        <textarea  
                                        className="form-control" 
                                        name="suggestion"
                                        rows="5"
                                        onChange={this.onChange}
                                        ></textarea>    
                                    </div>

                                    <button type="submit" className="btn btn-danger" onClick={this.onSubmit}>
                                        Lot's Of Love!
                                    </button>
                                    <button type="button" className="btn btn-info ml-3" onClick={this.handleReset}>
                                        Reset
                                    </button>
                                </form>                      
                            </div>
                        </div>

                        <div className="py-5 mx-2 text-center">
                            <h4 className={submitMessageTextColor} >{submitMessage}</h4>
                        </div>
                        </div>
                        </div>
                    
                    
                      
                    )
        
    }
}

export default  Writesuggestion;
