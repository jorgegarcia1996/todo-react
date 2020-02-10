import React from "react";
import "./List.css";
import { ListItem, Header } from "../../components";
import { getAllTasks } from '../../redux/action/GetAllTasks'
import { connect } from "react-redux";

class List extends React.Component {

  componentDidMount() {
    this.props.getAllTasks();
  }

  render() {
    //this.props.getAllTasks();
    const { tasks } = this.props;
    return (
      <div className="List">
        <Header headerText="React TODO List" button="add" />
        {tasks.length > 0 ? (
          tasks.map(t => ( 
            <ListItem  key={t.id.N} id={t.id.N} />
          ))
        ) : (
          <h1 className="center">You no have tasks</h1>
        )}
      </div>
    );
  }
}

function mapState(state) {
  return {
    tasks: state.getTasksReducer.tasks
  }
}

const mapDispatch = {
  getAllTasks
}

export default connect(mapState, mapDispatch)(List);
