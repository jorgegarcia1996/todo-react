import React from "react";
import "./AddForm.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addTask } from '../../redux/action/AddTask'

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
    const {id} = this.props;
    const {title, description} = this.state;
    const taskToSave = {
      id,
      title,
      description
    }
    this.props.addTask(taskToSave)
    this.reload = true;
    this.forceUpdate();
  };

  render() {
    if (this.reload) {
      return <Redirect to="/todo-react" />;
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

function mapState(state) {
  return {
    id: state.getTasksReducer.nextId
  }
}

const mapDispatch = {
  addTask
}

export default connect(mapState, mapDispatch)(AddForm);
