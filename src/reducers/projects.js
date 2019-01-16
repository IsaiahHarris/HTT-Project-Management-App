import { LOAD_PROJECTS } from '../actions';
console.log(LOAD_PROJECTS);
const initialState = [];

const projectsList = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_PROJECTS:
      return [...action.projects];
    default:
      return state;
  }
};

export default projectsList;
