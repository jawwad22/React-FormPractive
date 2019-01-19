import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      formErrors:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }

  }
  handleSubmit= e => {
    e.preventDefault();

    if(forValid(this.state.formErrors)){
      console.log("--SUBMITTING"+
      "FIRST NAME: "+this.state.firstName+
      "LAST NAME: "+this.state.lastName+
      "EMAIL: "+this.state.email+
      "PASSWORD: "+this.state.password+
    "")
    }else{}
  }
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="firstName">
              <label htmlFor='firstName'>First Name</label>
              <input type="text" className=""
                placeholder="First Name" noValidate
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor='lastName'>Last Name</label>
              <input type="text" className=""
                placeholder="Last Name" noValidate
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor='email'>Email</label>
              <input type="text" className=""
                placeholder="Email" noValidate
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor='password'>Password</label>
              <input type="password" className=""
                placeholder="Password" noValidate
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
