import React from "react";
import "./List.css";
import { ListItem, Header } from "../../components";
import { getAllTasks } from "../../redux/action/GetAllTasks";
import { connect } from "react-redux";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#ff0000",
    "1.0": "#00ff00"
  },
  shadowBlur: 5,
  barThickness: 4
});

class List extends React.Component {
  componentDidMount() {
    this.props.getAllTasks();
  }
  
  loadContent = () => {
    const { tasks, loading } = this.props;
    if (loading) {
      return <TopBarProgress/>
    } else {
      if (tasks.length > 0) {
        return tasks.map(t => <ListItem key={t.id.N} id={t.id.N} />);
      } else {
        return <h1 className="center">You have no tasks</h1>;
      }
    }
  };
  
  render() {
    return (
      <div className="List">
        <Header headerText="React TODO List" button="add" />
        {this.loadContent()}
      </div>
    );
  }
}

function mapState(state) {
  return {
    tasks: state.getTasksReducer.tasks,
    loading: state.getTasksReducer.loading
  };
}

const mapDispatch = {
  getAllTasks
};

export default connect(mapState, mapDispatch)(List);
