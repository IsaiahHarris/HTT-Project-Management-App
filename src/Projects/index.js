import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { loadProjects } from '../actions';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: ''
    };
  }
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    return (
      <div className="projects-container">
        <div className="header">Project 1</div>
        <div className="body-container">
          <img src="" alt="" className="project" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.projectsList);
  return {
    project: state.projectsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProjects: project => {
      dispatch(loadProjects(project));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
