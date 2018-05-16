import React, { Component } from 'react';
import Constant from '../constant';
import axios from 'axios';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      success: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  createUser() {
    axios.post('http://localhost:3000/api/v1/users', {
      user: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }
    }).then(response => this.setState({success: true}))
    .catch(err => console.log('There was an error:' + err))
  }

  render (){
    if(this.state.success){
      return <Redirect to='/'/>
    }

    return (
      <div className='row'>
        <div className='col-md-6'>
            <div className='form-group'>
              <label> First Name: </label>
              <input
                className='form-control'
                value={this.state.firstName}
                onChange={event => this.setState({firstName: event.target.value})} />
            </div>

            <div className='form-group'>
              <label> Last Name: </label>
              <input
                className='form-control'
                value={this.state.lastName}
                onChange={event => this.setState({lastName: event.target.value})} />
            </div>

            <div className='form-group'>
              <label> Email </label>
              <input
                className='form-control'
                value={this.state.email}
                onChange={event => this.setState({email: event.target.value})} />
            </div>

            <div className='form-group'>
              <label> Password </label>
              <input
                className='form-control'
                type='password'
                value={this.state.password}
                onChange={event => this.setState({password: event.target.value})} />
            </div>

            <div className='form-group'>
              <button
                className='btn btn-success'
                onClick={() => this.createUser()}
              >
                Register
              </button>
            </div>
        </div>
      </div>
    )
  }
}

export default SignUp;
