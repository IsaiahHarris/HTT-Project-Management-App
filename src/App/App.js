import React, { Component } from 'react';

import './App.css';
import { PageHeader } from 'react-bootstrap';
import Navbar from '../Navbar/';
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
        <PageHeader>HTT Project Management</PageHeader>
        <Navbar />
      </div>
    );
  }
}

export default App;
