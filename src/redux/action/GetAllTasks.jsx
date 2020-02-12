import Axios from "axios";
import { GET_ALL_TASKS, GET_TASKS_ENDPOINT, LOADING } from "./ActionConstants";

export const getAllTasksAction = tasks => ({
  type: GET_ALL_TASKS,
  payload: { tasks }
});

export const loadingTasksAction = loading => ({
  type: LOADING,
  payload: { loading }
});

export function getAllTasks() {
  return dispatch => {
    let path = process.env.BASE_URL + GET_TASKS_ENDPOINT;
    dispatch(loadingTasksAction(true));
    return Axios.get(path).then(res => {
      dispatch(getAllTasksAction(res.data.Items));
      dispatch(loadingTasksAction(false));
    });
  };
}