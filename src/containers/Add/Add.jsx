import React from'react';
import './Add.css';
import { Header, AddForm } from '../../components';

class Add extends React.Component {
  render() {
    return (
      <div className="Add">
        <Header headerText="Add new Task" button="return"/>
        <AddForm className="AddForm"/>
      </div>
    )
  }
}

export default Add;