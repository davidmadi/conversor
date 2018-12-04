import { combineReducers } from "redux";

import conversorReducer from './conversor';
import languageReducer from './language';

export default combineReducers({
  conversorReducer: conversorReducer,
  languageReducer : languageReducer
});
