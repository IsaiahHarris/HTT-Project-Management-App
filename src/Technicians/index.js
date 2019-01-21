import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTechnicians } from '../actions';
import { Image } from 'react-bootstrap';
import './Technicians.scss';
class Technicians extends Component {
  componentDidMount() {
    this.props.loadTechnicians();
  }

  render() {
    console.log(this.props);
    let technicians = this.props.technicians;
    return (
      <div className="technicians-container">
        <div className="header">Technicians</div>
        <div className="technicians-container">
          {technicians.map((technician, key) => {
            return (
              <div className="technician" key={key}>
                <Image rounded className="avatar" src={technician.image_url} />
                <div className="name">
                  {technician.first_name + ' ' + technician.last_name}
                </div>
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
