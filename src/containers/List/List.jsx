import React from "react";
import "./List.css";
import { ListItem, Header } from "../../components";
import axios from "axios";

class List extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.getData();
  }
  
  getData = () => {
    axios.get("https://my-json-server.typicode.com/jorgegarcia1996/todo-react/tasks").then(res => {
      const tasks = res.data;
      this.setState({ tasks });
    });
  }
  
  static getDerivedStateFromProps(props, state) {
    axios.get("https://my-json-server.typicode.com/jorgegarcia1996/todo-react/tasks").then(res => {
      const tasks = res.data;
      state = { tasks };
    });
    return null;
  }

  render() {
    return (
      <div className="List">
        <Header headerText="React TODO List" button="add" />
        {this.state.tasks.length > 0 ? (
          this.state.tasks.map(t => ( 
            <ListItem  key={t.id} id={t.id} title={t.title} />
          ))
        ) : (
          <h1 className="center">You no have tasks</h1>
        )}
      </div>
    );
  }
}

export default List;
