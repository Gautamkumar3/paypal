import {
  ADD_TASK_ERROR,
  ADD_TASK_LOADING,
  ADD_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  DELETE_TASK_LOADING,
  DELETE_TASK_SUCCESS,
  GET_TASK_ERROR,
  GET_TASK_LOADING,
  GET_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  UPDATE_TASK_LOADING,
  UPDATE_TASK_SUCCESS,
} from "./Task.types";

const initData = {
  loading: false,
  error: false,
  data: [],
};

export const taskReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_TASK_LOADING:
      return { ...state, loading: true, error: false, data: [] };
    case GET_TASK_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case ADD_TASK_LOADING:
      return { ...state, loading: true, error: false };
    case ADD_TASK_ERROR:
      return { ...state, loading: false, error: true };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    case DELETE_TASK_LOADING:
      return { ...state, loading: true, error: false };
    case DELETE_TASK_ERROR:
      return { ...state, loading: false, error: true };
    case DELETE_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    }
    case UPDATE_TASK_LOADING:
      return { ...state, loading: true, error: false };
    case UPDATE_TASK_ERROR:
      return { ...state, loading: false, error: true };
    case UPDATE_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    }
    default:
      return {
        ...state,
      };
  }
};
