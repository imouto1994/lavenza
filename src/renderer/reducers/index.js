import { combineReducers } from "redux";

import TextReducer from "./TextReducer";

export default combineReducers({
  Text: TextReducer,
});