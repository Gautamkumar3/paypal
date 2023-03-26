import axios from "axios";
import {
  ADD_SPRINT_SUCCESS,
  UPDATE_SPRINT_ERROR,
} from "../sprint/Sprint.types";
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

// const api = "http://localhost:8080";
const api = "https://paypal-api.onrender.com";

export const getTaskData = (id) => async (dispatch) => {
  dispatch({ type: GET_TASK_LOADING });
  try {
    const res = await axios.get(`${api}/tasks`, {
      headers: { sprintid: id },
    });
    dispatch({
      type: GET_TASK_SUCCESS,
      payload: res.data.data,
    });

    return res.data;
  } catch (er) {
    return dispatch({ type: GET_TASK_ERROR });
  }
};

export const addTaskData = (id, data) => async (dispatch) => {
  dispatch({ type: ADD_TASK_LOADING });
  try {
    const res = await axios.post(`${api}/tasks`, data, {
      headers: { sprintid: id },
    });
    dispatch({
      type: ADD_TASK_SUCCESS,
      payload: res.data.data,
    });

    return res;
  } catch (er) {
    return dispatch({ type: ADD_TASK_ERROR });
  }
};

export const deleteTaskData = (sprintId, id) => async (dispatch) => {
  dispatch({ type: DELETE_TASK_LOADING });
  try {
    const res = await axios.delete(`${api}/tasks/${id}`, {
      headers: { sprintid: sprintId },
    });
    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload: res.data.data,
    });

    return res;
  } catch (er) {
    return dispatch({ type: DELETE_TASK_ERROR });
  }
};

export const updateTaskData = (sprintId, id, data) => async (dispatch) => {
  dispatch({ type: UPDATE_TASK_LOADING });
  try {
    const res = await axios.patch(`${api}/tasks/${id}`, data, {
      headers: { sprintid: sprintId },
    });
    dispatch({
      type: UPDATE_TASK_SUCCESS,
      payload: res.data.data,
    });

    return res;
  } catch (er) {
    return dispatch({ type: UPDATE_SPRINT_ERROR });
  }
};
