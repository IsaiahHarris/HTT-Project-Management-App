import axios from 'axios';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const LOAD_TECHNICIANS = 'LOAD_TECHNICIANS';
export const loadProjects = () => {
  return dispatch => {
    return axios.get('/api/projects').then(response => {
      dispatch({ type: LOAD_PROJECTS, projects: response.data });
    });
  };
};
export const loadTechnicians = () => {
  return dispatch => {
    return axios.get('/api/technicians').then(response => {
      dispatch({ type: LOAD_TECHNICIANS, technicians: response.data });
    });
  };
};
