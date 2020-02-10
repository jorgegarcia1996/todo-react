import Axios from "axios";
import { BASE_URL, ADD_TASK_ENDPOINT } from "./ActionConstants";

export function addTask(task) {
  return dispatch => {
    let path = BASE_URL + ADD_TASK_ENDPOINT + `?id=${task.id}&title=${task.title}&desc=${task.description}`;
    return Axios.get(path);
  };
}