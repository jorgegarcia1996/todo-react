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
      .get(`https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/addTask?id=${this.state.id}&title=${this.state.title}&desc=${this.state.description}`)
      .then( () => axios.get("https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/getTasks"));
      this.reload = true;
      this.forceUpdate();
  };

  componentDidMount() {
    axios.get(`https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/getTaskById?id=${this.state.id}`).then(res => {
      this.setState({
        title: res.data.Item.title.S,
        description: res.data.Item.description.S
      });
    });
  }

  render() {
    if (this.reload) {
      return <Redirect to="/todo-list-react"/>;
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
