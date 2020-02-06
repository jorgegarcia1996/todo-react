import React from "react";
import "./ListItem.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

class ListItem extends React.Component {
  state = {
    task: this.props.task
  }



  deleteTask = async () => {
    confirmAlert({
      title: "Delete task",
      message: `Do you really want to delete '${this.state.task.title.S}' task?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios.get(`https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/deleteTask?id=${this.state.task.id.N}`)
                  .then(() => {
                    window.location.reload();
                  });
                  
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
        title: this.state.task.title.S,
        message: this.state.task.description.S,
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
        <h3 className="element-title" onClick={this.showDetails}>{this.state.task.title.S}</h3>
        <span className="element-icons">
          <Link className="edit-icon" to={`/todo-react/edit/${this.state.task.id.N}`}>
            <FaEdit />
          </Link>
          <a onClick={this.deleteTask} className="delete-icon">
            <FaTrashAlt />
          </a>
        </span>
      </div>
    );
  }
}

export default ListItem;
