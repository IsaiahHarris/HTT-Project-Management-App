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
                responsive
                rounded
                src={project.image_url}
                alt=""
                className="project-img"
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
                  console.log('piece.note', piece.note.length > 0);
                  return (
                    <div key={key}>
                      {piece.requires_xray === 'false' &&
                        piece.requires_pt === 'false' && (
                          <div className="spool-piece">
                            <div className="spool-piece-img-container">
                              {/* <div
                                className="spool-piece-img"
                                style={{
                                  backgroundImage:
                                  'url(' + piece.image_url + ')'
                                }}
                              /> */}
                              <Image
                                responsive
                                rounded
                                src={piece.image_url}
                                alt=""
                                className="spool-piece-img"
                              />
                            </div>
                            <div className="spool-piece-title">
                              {piece.title}
                            </div>
                            {piece.note.length > 0 && (
                              <div className="note">{piece.note}</div>
                            )}
                          </div>
                        )}
                      {(piece.requires_xray === 'true' ||
                        piece.requires_pt === 'true') && (
                        <div className="spool-piece">
                          <div className="faulty-spool-piece-img-container">
                            {/* <div
                              className="spool-piece-img"
                              style={{
                                backgroundImage: 'url(' + piece.image_url + ')'
                              }}
                            /> */}
                            <Image
                              responsive
                              rounded
                              src={piece.image_url}
                              alt=""
                              className="spool-piece-img"
                            />
                          </div>
                          <div className="faulty-spool-piece-title">
                            {piece.title}
                          </div>
                          {piece.note.length > 0 && (
                            <div className="note">{piece.note}</div>
                          )}
                        </div>
                      )}
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
