import React from "react";
import "./ListItem.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import { deleteTask } from '../../redux/action/DeleteTasks'
import { connect } from "react-redux";

class ListItem extends React.Component {

  deleteTask = async () => {
    confirmAlert({
      title: "Delete task",
      message: `Do you really want to delete '${this.props.task.title.S}' task?`,
      buttons: [
        {
          label: "Yes",
           onClick: () => {
            this.props.deleteTask(this.props.task.id.N);
            window.location.reload();
           }
        },
        {
          label: "No"
        }
      ]
    });
  };

  showDetails = () => {
   confirmAlert({
        title: this.props.task.title.S,
        message: this.props.task.description.S,
        buttons: [
          {
            label: "Close"
          }
        ]
      })
  }

  render() {
    return (
      <div className="ListItem">
        <h3 className="element-title" onClick={this.showDetails}>{this.props.task.title.S}</h3>
        <span className="element-icons">
          <Link className="edit-icon" to={`/todo-react/edit/${this.props.task.id.N}`}>
            <FaEdit/>
          </Link>
          <a onClick={this.deleteTask} className="delete-icon">
            <FaTrashAlt />
          </a>
        </span>
      </div>
    );
  }
}

function mapState(state, ownProps) {
  return {
    task: state.getTasksReducer.tasks[ownProps.id]
  }
}

const mapDispatch = {
  deleteTask
}

export default connect(mapState, mapDispatch)(ListItem);
