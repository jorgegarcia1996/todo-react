import Axios from "axios";
import { DELETE_TASK_ENDPOINT } from "./ActionConstants";
import { getAllTasks } from './GetAllTasks'


export function deleteTask(id) {
  return dispatch => {
    let path = process.env.REACT_APP_API_BASE_URL + DELETE_TASK_ENDPOINT + `?id=${id}`;
    return Axios.get(path).then(() => {
      dispatch(getAllTasks())
    });
  };
}