import React from "react";
import "./ListItem.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

class ListItem extends React.Component {
  state = {
    title: "",
    description: "",
  }
  deleteTask = () => {
    confirmAlert({
      title: "Delete task",
      message: `Do you really want to delete '${this.props.title}' task?`,
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .delete(`https://my-json-server.typicode.com/jorgegarcia1996/todo-react/tasks/${this.props.id}`)
              .then(() => window.location.reload(true))
        },
        {
          label: "No"
        }
      ]
    });
  };

  showDetails = () => {
    axios.get(`https://my-json-server.typicode.com/jorgegarcia1996/todo-react/tasks/${this.props.id}`).then(
      res => this.setState({
        title: res.data.title,
        description: res.data.description
      }, () => 
      confirmAlert({
        title: this.state.title,
        message: this.state.description,
        buttons: [
          {
            label: "Close"
          }
        ]
      })
      )
    )
  }

  render() {
    return (
      <div className="ListItem">
        <h3 className="element-title" onClick={this.showDetails}>{this.props.title}</h3>
        <span className="element-icons">
          <Link className="edit-icon" to={`/edit/${this.props.id}`}>
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
