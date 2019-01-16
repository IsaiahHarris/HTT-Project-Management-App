import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { loadProjects } from '../actions';
import './Projects.scss';
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
    let project = this.props.projects[0];
    return (
      <div className="projects-container">
        {project && <div className="header">{project.title}</div>}
        <div className="body-container">
          <div className="image-container">
            {project && (
              <Image
                rounded
                src={project.image_url}
                alt=""
                className="project"
              />
            )}
          </div>
          {project && (
            <div className="spool-header">Spool Pieces for {project.title}</div>
          )}
          <div className="spool-pieces-container">
            <div className="spool-pieces">
              {project &&
                project.spoolPieces.map((piece, key) => {
                  console.log(piece);
                  return (
                    <div className="spool-piece" key={key}>
                      <div className="spool-piece-title">{piece.title}</div>
                      <div className="spool-piece-img-container">
                        <Image
                          rounded
                          className="spool-piece-img"
                          src={piece.image_url}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
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
