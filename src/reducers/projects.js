import { LOAD_PROJECTS } from '../actions';

const initialState = [];

const projectsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return [...action.projects];
    default:
      return state;
  }
};

export default projectsList;
