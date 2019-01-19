import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
              <label htmlFor='email'>First Name</label>
              <input type="text" className=""
                placeholder="Email" noValidate
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
