import React from "react";
import "./AddForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddForm extends React.Component {
  state = {
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
    axios
      .get(
        `https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/addTask?id=${Date.now()}&title=${this.state.title}&desc=${this.state.description}`)
      .then(() => axios.get("https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/getTasks"));
    this.reload = true;
    this.forceUpdate();
  };

  render() {
    if (this.reload) {
      return <Redirect to="/todo-list-react" />;
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
