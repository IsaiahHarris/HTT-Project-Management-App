import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
