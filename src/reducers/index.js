import { combineReducers } from "redux";

import conversorReducer from './conversor';

export default combineReducers({
  conversorReducer: conversorReducer
});
