import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { sprintReducer } from "./sprint/Sprint.reducer";
import { taskReducer } from "./task/Task.reducer";

const rootReducer = combineReducers({
  sprintData: sprintReducer,
  taskData: taskReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
