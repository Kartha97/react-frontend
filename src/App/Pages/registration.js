import axios from 'axios';
import React, { Component } from 'react';

class registration extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    }
  }
  RegisterUser() {
     if(this.state.name && this.state.email){
       const userDetails = {
         name: this.state.name,
         email: this.state.email
       }
       axios.post("http://localhost:8080/user/registration",userDetails).then((response) => {
         if(response){
          this.props.history.push('/login/'+response.id);
          console.log(response);
          console.log(response.data);
         }
       }).catch(error => {
         console.log(error);
       })
     }
  }
  handleNameChange = (e) => {
    this.setState({ userName: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  
  render() {

    return (
      <div className="App">
        <h1>Hello New User.. Please Fill the below details and submit to register</h1>
        <form id="main-login">
                    <label>
                        <span className="text">user name:</span>
                        <input type="text" name="name" onChange={this.handleChange}/><br/>
                    </label>
                    <br/>
                    <label>
                        <span className="text">email:</span>
                        <input type="email" name="email" onChange={this.handleChange}/><br/>
                    </label><br/>
                    <div className="align-right">
                        <button type="submit" onClick={this.RegisterUser}>Submit</button>
                    </div>
                </form>
        
      </div>
    );
  }
}

export default registration;