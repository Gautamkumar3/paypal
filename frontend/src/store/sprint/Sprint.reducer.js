import {
  ADD_SPRINT_ERROR,
  ADD_SPRINT_LOADING,
  ADD_SPRINT_SUCCESS,
  DELETE_SPRINT_ERROR,
  DELETE_SPRINT_LOADING,
  DELETE_SPRINT_SUCCESS,
  GET_SPRINT_ERROR,
  GET_SPRINT_LOADING,
  GET_SPRINT_SUCCESS,
  UPDATE_SPRINT_ERROR,
  UPDATE_SPRINT_LOADING,
  UPDATE_SPRINT_SUCCESS,
} from "./Sprint.types";

const initData = {
  loading: false,
  error: false,
  data: [],
};

export const sprintReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_SPRINT_LOADING:
      return { ...state, loading: true, error: false, data: [] };
    case GET_SPRINT_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    case GET_SPRINT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case ADD_SPRINT_LOADING:
      return { ...state, loading: true, error: false };
    case ADD_SPRINT_ERROR:
      return { ...state, loading: false, error: true };
    case ADD_SPRINT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    case DELETE_SPRINT_LOADING:
      return { ...state, loading: true, error: false };
    case DELETE_SPRINT_ERROR:
      return { ...state, loading: false, error: true };
    case DELETE_SPRINT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    }
    case UPDATE_SPRINT_LOADING:
      return { ...state, loading: true, error: false };
    case UPDATE_SPRINT_ERROR:
      return { ...state, loading: false, error: true };
    case UPDATE_SPRINT_SUCCESS: {
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
