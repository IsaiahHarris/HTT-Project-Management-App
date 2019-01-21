import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTechnicians } from '../actions';
class Technicians extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadTechnicians();
  }

  render() {
    console.log(this.props);
    let technicians = this.props.technicians;
    return (
      <div className="technician-container">
        <div className="header">Technicians</div>
        <div className="technicians-container">
          {technicians.map((technician, key) => {
            return (
              <div className="technician">
                <div className="username">{technician.username}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    technicians: state.techniciansList
  };
};

export default connect(
  mapStateToProps,
  { loadTechnicians }
)(Technicians);
