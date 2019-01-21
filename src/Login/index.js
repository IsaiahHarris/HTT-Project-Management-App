import React, { Component } from 'react';
import './Login.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
let working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Welcome back!');
    setTimeout(function() {
      $state.html('Log in');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
});
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    // this.handleInputChange = this.handleInputChange
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="wrapper">
        <form className="login">
          <p className="title">Log in</p>

          <input type="text" placeholder="Username" autoFocus />
          <i className="fa fa-user" />
          <input type="password" placeholder="Password" />
          <i className="fa fa-key" />

          <a href="/project">Don't have an account? Register now.</a>
          <button>
            <i className="spinner" />
            <a href="/project" className="state">
              Log in
            </a>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
