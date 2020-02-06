import React from "react";
import "./List.css";
import { ListItem, Header } from "../../components";
import axios from "axios";

class List extends React.Component {
  state = {
    tasks: {}
  };

  componentDidMount() {
    this.getData();
  }
  
  getData = async () => {
    await axios.get("https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/getTasks").then(res => {
      const tasks = res.data.Items;
      this.setState({ tasks });
    });
  }
  
  static async getDerivedStateFromProps(props, state) {
    await axios.get("https://rrbg7o8yy0.execute-api.us-east-1.amazonaws.com/add/getTasks").then(res => {
      const tasks = res.data.Items;
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
            <ListItem  key={t.id.N} task={t} />
          ))
        ) : (
          <h1 className="center">You no have tasks</h1>
        )}
      </div>
    );
  }
}

export default List;
