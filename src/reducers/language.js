import { Map, List, Set } from 'immutable';
import all from '../library/resources/all';

function initialState(){
  return {
    translator : all['en'],
  }
}

export default (state = initialState(), action) =>{//sem nome mesmo
  switch (action.type) {
    case 'pt':
      state = all['pt'];
      break;
    default:
      state = all['en'];
      break;
  }

  return state;
}