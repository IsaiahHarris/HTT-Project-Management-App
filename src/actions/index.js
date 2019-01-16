import axios from 'axios';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const loadProjects = () => {
  return dispatch => {
    return axios.get('/api/projects', { port: 8080 }).then(response => {
      console.log('trying to load projects');
      dispatch({ type: LOAD_PROJECTS, projects: response.data });
    });
  };
};
