import React from'react';
import './Edit.css';
import { Header, EditForm } from '../../components';

class Edit extends React.Component {

  render() {
    return (
      <div className="Edit">
        <Header headerText="Edit task" button="return"/>
        <EditForm id={this.props.match.params.id} className="EditForm"/>
      </div>
    )
  }
}

export default Edit;