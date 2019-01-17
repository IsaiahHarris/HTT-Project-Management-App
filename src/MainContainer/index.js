import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Projects from '../Projects';
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
