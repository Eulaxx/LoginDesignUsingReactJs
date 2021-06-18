
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyForm extends Component {
  render() {
    return( 
      <div class="container">
      <div class="card card-container">
        <h1>Sign In</h1>
          <p id="profile-name" class="profile-name-card"></p>
          <form class="form-signin">
              <span id="reauth-email" class="reauth-email"></span>
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
              <div id="remember" class="checkbox">
                  <label>
                      <input type="checkbox" value="remember-me"/> Remember me
                  </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
          </form>
          <a href="button" class="forgot-password">
              Forgot the password?
          </a>
      </div>
  </div>
  
    );
  }
}

export default MyForm;