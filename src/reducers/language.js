import { Map, List, Set } from 'immutable';
import all from '../library/resources/all';

function initialState(){
  return {
    translator : all['en'],
  }
}

export default (state = initialState(), action) =>{//sem nome mesmo

  if (action.type == 'LANGUAGE_RESOURCE')
  {
    switch (action.language) {
      case 'pt':
      case 'pt-BR':
        state = all['pt'];
        break;
      default:
        state = all['en'];
        break;
    }
  }

  return state;
}