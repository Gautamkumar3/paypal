import axios from "axios";
import {
  GET_SPRINT_ERROR,
  GET_SPRINT_LOADING,
  GET_SPRINT_SUCCESS,
} from "./Sprint.types";

const api = "http://localhost:8080";
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
