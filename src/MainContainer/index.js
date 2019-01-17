import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Projects from '../Projects';
import Login from '../Login';
import './MainContainer.scss';
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
