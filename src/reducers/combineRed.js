import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import multiplyReducer from "./multiplyReducer";

const allReducersCombined = combineReducers({
  counterReducer: counterReducer,
  multiplyReducer: multiplyReducer
});

export default allReducersCombined;
