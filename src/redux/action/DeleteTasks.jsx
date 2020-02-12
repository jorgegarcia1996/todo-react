import Axios from "axios";
import { BASE_URL, DELETE_TASK_ENDPOINT } from "./ActionConstants";
import { getAllTasks } from './GetAllTasks'


export function deleteTask(id) {
  return dispatch => {
    let path = BASE_URL + DELETE_TASK_ENDPOINT + `?id=${id}`;
    return Axios.get(path).then(() => {
      dispatch(getAllTasks())
    });
  };
}