import React from "react";
import "./EditForm.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addTask } from "../../redux/action/AddTask";

class EditForm extends React.Component {
  state = {
    id: this.props.id,
    title: "",
    description: ""
  };

  reload = false;
  taskNotFound = false;

  titleChange = event => {
    this.setState({ title: event.target.value });
  };

  descriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = () => {
    const { id } = this.props;
    const { title, description } = this.state;
    const taskToSave = {
      id,
      title,
      description
    };
    this.props.addTask(taskToSave);
    this.reload = true;
    this.forceUpdate();
  };

  componentDidMount() {
    if (!!this.props.task) {
      const { title, description } = this.props.task;
      this.setState({
        title: title.S,
        description: description.S
      });
    } else {
      this.taskNotFound = true;
      this.forceUpdate();
    }
  }

  render() {
    const { title, description } = this.state;
    if (this.reload) {
      return <Redirect to="/todo-react" />;
    } else if (this.taskNotFound) {
      return <Redirect to="/todo-react/task-not-found" />;
    } else {
      return (
        <div className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input
              value={title}
              type="text"
              onChange={this.titleChange}
              required
            />
            <label>Description</label>
            <textarea
              value={description}
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

function mapState(state, ownProps) {
  const { id } = ownProps;
  return {
    task: state.getTasksReducer.tasks[id]
  };
}

//Update task with the same action to create task
const mapDispatch = {
  addTask
};

export default connect(mapState, mapDispatch)(EditForm);
