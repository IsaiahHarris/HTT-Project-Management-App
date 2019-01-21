import { LOAD_TECHNICIANS } from '../actions';

const initialState = [];

const techniciansList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TECHNICIANS:
      return [...action.technicians];
    default:
      return state;
  }
};

export default techniciansList;
