import axios from 'axios';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const loadProjects = () => {
  return dispatch => {
    return axios.get('http://localhost:8080/api/projects').then(response => {
      dispatch({ type: LOAD_PROJECTS, projects: response.data });
    });
  };
};
