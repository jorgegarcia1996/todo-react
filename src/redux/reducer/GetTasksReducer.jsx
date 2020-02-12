import { GET_ALL_TASKS, LOADING } from "../action/ActionConstants";

const initialState = {
  tasks: [],
  nextId: 0,
  loading: false
}

export default function getTasksReducer(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_TASKS:
      let tasks = action.payload.tasks.reverse();
      let copy = [];
      tasks.map(t => {
        let pos = t.id.N;
        copy[pos] = t;
        return null;
      });
      let freeId = 0;
      let idGetted = false;
      while (!idGetted) {
        if(copy[freeId] == null) {
          idGetted = true
        } else {
          freeId++;
        }
      }
      return {
        ...state,
        tasks: copy,
        nextId: freeId
      }

      case LOADING: 
      return {
        ...state,
        loading: action.payload.loading
      }
      default:
        return state;
  }
}