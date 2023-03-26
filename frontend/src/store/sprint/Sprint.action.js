import axios from "axios";
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

// const api = "http://localhost:8080";

const api = "https://paypal-api.onrender.com";
const userdata = JSON.parse(localStorage.getItem("userdata"));

export const getSprintData = () => async (dispatch) => {
  dispatch({ type: GET_SPRINT_LOADING });
  try {
    const res = await axios.get(`${api}/sprint`, {
      headers: { token: userdata.token },
    });
    dispatch({
      type: GET_SPRINT_SUCCESS,
      payload: res.data.data,
    });

    return res;
  } catch (er) {
    dispatch({ type: GET_SPRINT_ERROR });
    return er.message;
  }
};

export const addSprintData = (data) => async (dispatch) => {
  dispatch({ type: ADD_SPRINT_LOADING });
  try {
    const res = await axios.post(`${api}/sprint`, data, {
      headers: { token: userdata.token },
    });
    dispatch({
      type: ADD_SPRINT_SUCCESS,
      payload: res.data.data,
    });

    return res;
  } catch (er) {
    dispatch({ type: ADD_SPRINT_ERROR });
    return er.message;
  }
};

export const deleteSprintData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SPRINT_LOADING });
  try {
    const res = await axios.delete(`${api}/sprint/${id}`, {
      headers: { token: userdata.token },
    });
    dispatch({
      type: DELETE_SPRINT_SUCCESS,
      payload: res.data.data,
    });

    return res;
  } catch (er) {
    dispatch({ type: DELETE_SPRINT_ERROR });
    return er.message;
  }
};

export const updateSprintData = (id, data) => async (dispatch) => {
  console.log(id, data, userdata.token);
  dispatch({ type: UPDATE_SPRINT_LOADING });

  try {
    const res = await axios.patch(`${api}/sprint/${id}`, data, {
      headers: { token: userdata.token },
    });
    dispatch({
      type: UPDATE_SPRINT_SUCCESS,
      payload: res.data.data,
    });

    return res;
  } catch (er) {
    dispatch({ type: UPDATE_SPRINT_ERROR });
    return er.message;
  }
};
