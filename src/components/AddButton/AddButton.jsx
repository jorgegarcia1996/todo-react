import React from "react";
import "./AddButtton.css";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

class AddButton extends React.Component {
  render() {
    return (
      <div className="AddButton">
        <span className="add-icon">
          <Link to="/new">
            <IoIosAddCircle />
          </Link>
        </span>
      </div>
    );
  }
}

export default AddButton;
