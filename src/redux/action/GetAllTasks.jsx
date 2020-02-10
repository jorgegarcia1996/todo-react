import Axios from "axios";
import { GET_ALL_TASKS, BASE_URL, GET_TASKS_ENDPOINT } from "./ActionConstants";

export const getAllTasksAction = tasks => ({
  type: GET_ALL_TASKS,
  payload: { tasks }
});

export function getAllTasks() {
  return dispatch => {
    let path = BASE_URL + GET_TASKS_ENDPOINT;
    return Axios.get(path).then(res => {
      dispatch(getAllTasksAction(res.data.Items));
    });
  };
}