import React, { Component } from 'react';

import './App.css';
import { PageHeader } from 'react-bootstrap';
import Navbar from '../Navbar/';
import MainContainer from '../MainContainer';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  updateModal(isVisible) {
    this.setState({
      isVisible: isVisible
    });

    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <PageHeader>HTT Project Management App</PageHeader>
        <Navbar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
