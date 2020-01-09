import React from "react";
import "./EditForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditForm extends React.Component {
  state = {
    id: this.props.id,
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
      .put(`http://localhost:3001/tasks/${this.state.id}`, this.state)
      .then( () => axios.get("http://localhost:3001/tasks"));
      this.reload = true;
      this.forceUpdate();
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/tasks/${this.state.id}`).then(res => {
      this.setState({
        title: res.data.title,
        description: res.data.description
      });
    });
  }

  render() {
    if (this.reload) {
      return <Redirect to="/"/>;
    } else {
      return (
        <div className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input
              value={this.state.title}
              type="text"
              onChange={this.titleChange}
              required
            />
            <label>Description</label>
            <textarea
              value={this.state.description}
              onChange={this.descriptionChange}
              required
            />
            <input type="submit" value="Save changes" />
          </form>
        </div>
      );
    }
  }
}

export default EditForm;
