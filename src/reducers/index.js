import { combineReducers } from 'redux';

import projectsList from './projects';
import techniciansList from './technicians';
export default combineReducers({
  projectsList,
  techniciansList
});
