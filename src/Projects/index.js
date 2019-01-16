import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { loadProjects } from '../actions';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      image_url: ''
    };
  }
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    console.log(this.props.projects);
    return (
      <div className="projects-container">
        <div className="header">Project 1</div>
        <div className="body-container">
          <div className="image-container">
            {this.props.projects[0] && (
              <img
                src={this.props.projects[0].image_url}
                alt=""
                className="project"
              />
            )}
          </div>
          <div className="spool-pieces-container">
            {this.props.projects[0] &&
              this.props.projects[0].spoolPieces.map((piece, key) => {
                console.log(piece);
                return (
                  <div className="spool-piece" key={key}>
                    <div className="spool-piece-title">{piece.title}</div>
                    <div className="spool-piece-img">
                      <img src={piece.image_url} alt="" />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projectsList
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
