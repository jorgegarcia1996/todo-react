import Axios from "axios";
import { ADD_TASK_ENDPOINT } from "./ActionConstants";
import { getAllTasks } from './GetAllTasks'

export function addTask(task) {
  return dispatch => {
    let path = process.env.BASE_URL + ADD_TASK_ENDPOINT + `?id=${task.id}&title=${task.title}&desc=${task.description}`;
    return Axios.get(path).then(() => {
      dispatch(getAllTasks())
    });
  };
}