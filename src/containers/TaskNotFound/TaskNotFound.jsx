import React from "react";
import "./TaskNotFound.css";
import { Link } from "react-router-dom";

class TaskNotFound extends React.Component {
  render() {
    return (
      <div className="TaskNotFound">
        <h1 className="message">404 Task Not Found</h1>
        <h3>
          <Link to="/todo-react">Return to task list</Link>
        </h3>
      </div>
    );
  }
}

export default TaskNotFound;