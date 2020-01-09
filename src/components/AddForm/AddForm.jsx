import React from "react";
import "./AddForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddForm extends React.Component {
  state = {
    id: "",
    title: "",
    description: ""
  };

  reload = false;

  titleChange = event => {
    this.setState({ title: event.target.value });
  };

  descriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = () => {
    axios.post("https://my-json-server.typicode.com/jorgegarcia1996/todo-react/tasks", this.state);
    this.reload = true;
    this.forceUpdate();
  };

  render() {
    if (this.reload) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" onChange={this.titleChange} required />
            <label>Description</label>
            <textarea onChange={this.descriptionChange} required />
            <input type="submit" value="Save task" />
          </form>
        </div>
      );
    }
  }
}

export default AddForm;
