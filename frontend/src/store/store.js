import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { sprintReducer } from "./sprint/Sprint.reducer";

const rootReducer = combineReducers({
  sprintData: sprintReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
